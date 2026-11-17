export type Projeto = {
  id: string;
  numero: string;
  categoria: string;
  titulo: string;
  bullets: string[];
  tags: string[];
  link?: { rotulo: string; href: string };
  mockup: 'uniflow' | 'jukebox' | 'glpi';
};

export const projetosIntro = {
  titulo: 'Projetos', // título só para leitores de tela
  legendaMockup: 'Ilustração da interface',
};

export const projetos: Projeto[] = [
  {
    id: 'uniflow',
    numero: '01',
    categoria: 'Sistema interno',
    titulo: 'UniFlow',
    bullets: [
      'Sistema web que criei para o time de TI da UniFECAF',
      'Consome a API REST do GLPI',
      'Painéis de backlog e total de chamados',
      'Empréstimo de equipamentos e estoque de insumos',
    ],
    tags: ['Node.js', 'React', 'SQL', 'API REST'],
    link: { rotulo: 'uniflow.serfecaf.workers.dev', href: 'https://uniflow.serfecaf.workers.dev' },
    mockup: 'uniflow',
  },
  {
    id: 'jukebox',
    numero: '02',
    categoria: 'App para eventos',
    titulo: 'Jukebox UniFECAF',
    bullets: [
      'App web (PWA) full stack integrado à API do Spotify',
      'Convidados entram com um código da festa e colocam músicas na fila pelo celular',
      'Back-end serverless com Netlify Blobs',
      'Tablet Android em modo quiosque exibindo a fila',
    ],
    tags: ['React', 'Node.js', 'Serverless', 'Spotify API'],
    link: { rotulo: 'unifecaf-jukebox.netlify.app', href: 'https://unifecaf-jukebox.netlify.app' },
    mockup: 'jukebox',
  },
  {
    id: 'glpi',
    numero: '03',
    categoria: 'Sistema de chamados',
    titulo: 'GLPI em todos os setores',
    bullets: [
      'Implantação do GLPI como sistema de chamados nos setores da instituição, além da TI',
      'Categorias com preenchimento automático e status próprios para cada setor',
      'Guia de implantação e apoio presencial às equipes no início do uso',
    ],
    tags: ['ITSM', 'GLPI', 'Processos', 'Treinamento'],
    mockup: 'glpi',
  },
];

/* Dados dos mockups (ilustrações) */
export const uniflowMock = {
  url: 'uniflow.serfecaf.workers.dev',
  menu: ['Backlog', 'Empréstimos', 'Insumos'],
  cards: [
    { rotulo: 'Abertos', valor: 18, tom: 'neutro' },
    { rotulo: 'Andamento', valor: 7, tom: 'amarelo' },
    { rotulo: 'Resolvidos', valor: 142, tom: 'azul' },
  ],
  grafico: { titulo: 'Chamados por semana', barras: [52, 72, 58, 88, 66, 42, 78], destaque: 3 },
};

export const jukeboxMock = {
  codigo: '#4821',
  tocando: 'Tocando agora',
  faixa: 'Faixa do evento',
  filaTitulo: 'Próximas na fila',
  fila: ['Pedido da Ana', 'Pedido do Rafa'],
  botao: '+ Adicionar música',
};

export type StatusGlpi = 'novo' | 'analise' | 'resolvido' | 'andamento';
export const glpiMock = {
  titulo: 'GLPI · Chamados',
  abas: [
    {
      nome: 'Gente e Gestão',
      itens: [
        { titulo: 'Admissão de colaborador', sub: 'Categoria preenchida', status: 'Novo', tom: 'novo' as StatusGlpi },
        { titulo: 'Atualização cadastral', sub: 'Status do setor', status: 'Em análise', tom: 'analise' as StatusGlpi },
        { titulo: 'Solicitação de acesso', sub: 'Encaminhado à TI', status: 'Resolvido', tom: 'resolvido' as StatusGlpi },
      ],
    },
    {
      nome: 'TI',
      itens: [
        { titulo: 'Impressora sem conexão', sub: 'Categoria preenchida', status: 'Em andamento', tom: 'andamento' as StatusGlpi },
        { titulo: 'Empréstimo de notebook', sub: 'Inventário vinculado', status: 'Novo', tom: 'novo' as StatusGlpi },
        { titulo: 'Reset de senha', sub: 'Atendimento N1', status: 'Resolvido', tom: 'resolvido' as StatusGlpi },
      ],
    },
    {
      nome: 'Outros setores',
      itens: [
        { titulo: 'Manutenção de sala', sub: 'Infraestrutura predial', status: 'Em análise', tom: 'analise' as StatusGlpi },
        { titulo: 'Reserva de auditório', sub: 'Eventos', status: 'Novo', tom: 'novo' as StatusGlpi },
        { titulo: 'Compra de material', sub: 'Status do setor', status: 'Resolvido', tom: 'resolvido' as StatusGlpi },
      ],
    },
  ],
};
