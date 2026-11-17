export const site = {
  nome: 'Luiz Sanchez',
  titulo: 'Luiz Sanchez · Portfólio',
  descricao:
    'Portfólio de Luiz Sanchez: Service Desk, infraestrutura e desenvolvimento de ferramentas internas. São Paulo, SP.',
  eyebrow: 'Portfólio · 2026',
  subtitulo: 'Service Desk, infraestrutura e desenvolvimento de ferramentas internas',
  local: 'São Paulo, SP',
  heroTags: ['Service Desk', 'GLPI', 'Node.js', 'React'],
  ctas: {
    projetos: 'Ver projetos',
    contato: 'Falar comigo',
  },
  nav: [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#trajetoria', label: 'Trajetória' },
    { href: '#contato', label: 'Contato' },
  ],
};

export const sobre = {
  eyebrow: 'Sobre mim',
  titulo: 'Prazer, eu sou o Luiz',
  numeros: [
    { valor: 20, rotulo: 'anos' },
    { valor: 2025, rotulo: 'início na TI' },
    { valor: 3, rotulo: 'projetos' },
  ],
  // Trechos entre ** viram <strong>
  paragrafos: [
    'Tenho 20 anos e trabalho no **Service Desk da UniFECAF**, onde atendo usuários e desenvolvo as ferramentas que deixam o suporte de TI mais eficiente.',
    'Sou formado em **Análise e Desenvolvimento de Sistemas** pela Cruzeiro do Sul e técnico em Mecatrônica pela ETEC. Essa mistura me fez gostar de entender como as coisas funcionam por dentro, do hardware ao código.',
    'Gosto de achar a **causa raiz** dos problemas e automatizar o que é repetitivo.',
  ],
};

export const contato = {
  eyebrow: 'Contato',
  titulo: 'Vamos conversar?',
  email: 'lupimsan@gmail.com',
  whatsapp: { rotulo: '(11) 95117-5977', href: 'https://wa.me/5511951175977' },
  linkedin: {
    rotulo: 'linkedin.com/in/luiz-henrique-pimentel-sanchez',
    href: 'https://www.linkedin.com/in/luiz-henrique-pimentel-sanchez',
  },
  github: { rotulo: 'github.com/luiz-sanchez', href: 'https://github.com/luiz-sanchez' },
  pdf: { rotulo: 'Baixar portfólio em PDF', href: '/luiz-sanchez-portfolio.pdf' },
};
