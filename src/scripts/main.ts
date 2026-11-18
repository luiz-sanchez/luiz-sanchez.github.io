const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header: fundo ao rolar + seção ativa ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
const sectionIds = [...new Set(navLinks.map((a) => a.hash.slice(1)))];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter((el): el is HTMLElement => !!el);

const setActive = (id: string | null) => {
  navLinks.forEach((a) => {
    if (a.hash === `#${id}`) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
};

const spy = () => {
  const line = window.innerHeight * 0.35;
  let current: string | null = null;
  for (const s of sections) {
    if (s.getBoundingClientRect().top <= line) current = s.id;
  }
  // Última seção: ativa ao chegar no fim da página
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections.at(-1)?.id ?? current;
  setActive(current);
};
// Rolagem: no máximo uma leitura por quadro (evita medir as seções a cada evento)
let scrollQueued = false;
const onScrollFrame = () => {
  scrollQueued = false;
  onScroll();
  spy();
};
onScrollFrame();
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(onScrollFrame); }
}, { passive: true });

/* ---------- Menu mobile ---------- */
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const setMenu = (open: boolean) => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('is-open', open);
  header?.classList.toggle('is-scrolled', open || window.scrollY > 24);
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});

/* ---------- Entradas na tela + contadores ---------- */
const animateCount = (el: HTMLElement) => {
  const to = Number(el.dataset.count);
  const from = Number(el.dataset.from ?? 0);
  if (reduceMotion || Number.isNaN(to)) return;
  const dur = 1200;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(from + (to - from) * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = String(from);
  requestAnimationFrame(tick);
};

const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      el.classList.add('is-in');
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(animateCount);
      io.unobserve(el);
    }
  },
  { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ---------- Hero: camadas reagem ao mouse (parallax) ---------- */
const panel = document.querySelector<HTMLElement>('[data-parallax]');
if (panel && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  panel.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
    el.style.setProperty('--k', `${el.dataset.depth}px`);
  });
  const hero = panel.closest('section') ?? panel;
  // Movimento com inércia: o alvo segue o mouse e a posição atual o persegue (lerp).
  // O loop só roda enquanto há distância a percorrer.
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
  const step = () => {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    panel.style.setProperty('--mx', cx.toFixed(4));
    panel.style.setProperty('--my', cy.toFixed(4));
    raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(step) : 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(step); };
  // Mede o painel só ao entrar no hero, não a cada movimento, para evitar reflow.
  let r = panel.getBoundingClientRect();
  hero.addEventListener('pointerenter', () => { r = panel.getBoundingClientRect(); });
  hero.addEventListener('pointermove', (e) => {
    tx = Math.max(-1, Math.min(1, ((e as PointerEvent).clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)));
    ty = Math.max(-1, Math.min(1, ((e as PointerEvent).clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)));
    kick();
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
}

/* ---------- Transição: card dos projetos se expande com a rolagem ---------- */
const shell = document.querySelector<HTMLElement>('[data-expand]');
const cssExpand = CSS.supports('animation-timeline: view()');
if (shell && !reduceMotion && !cssExpand) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const top = shell.getBoundingClientRect().top;
    const vh = window.innerHeight;
    // 0 quando o topo da seção está no pé da tela; 1 quando chega a 10% do topo
    const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.9)));
    shell.style.setProperty('--p', p.toFixed(3));
  };
  const onScrollExpand = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  update();
  window.addEventListener('scroll', onScrollExpand, { passive: true });
  window.addEventListener('resize', onScrollExpand);
}

/* ---------- Abas do GLPI ---------- */
document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const select = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panelEl = document.getElementById(t.getAttribute('aria-controls')!);
      if (panelEl) panelEl.hidden = !on;
    });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const map: Record<string, number> = {
        ArrowRight: (i + 1) % tabs.length,
        ArrowLeft: (i - 1 + tabs.length) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      };
      if (e.key in map) {
        e.preventDefault();
        select(map[e.key], true);
      }
    });
  });
});

/* ---------- Copiar e-mail ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.querySelector<HTMLElement>('[data-copy-label]');
  const status = btn.parentElement?.querySelector<HTMLElement>('[data-copy-status]');
  let timer = 0;
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy ?? '';
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    btn.classList.add('is-copied');
    if (label) label.textContent = 'E-mail copiado';
    if (status) status.textContent = 'E-mail copiado para a área de transferência';
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      btn.classList.remove('is-copied');
      if (label) label.textContent = 'Copiar e-mail';
      if (status) status.textContent = '';
    }, 2200);
  });
});
