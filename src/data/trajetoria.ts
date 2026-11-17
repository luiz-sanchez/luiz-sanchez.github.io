export type Item = { titulo: string; local: string; periodo: string };

export const trajetoriaIntro = {
  eyebrow: 'Trajetória',
  titulo: 'Formação e experiências',
};

export const formacao: Item[] = [
  { titulo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', local: 'Universidade Cruzeiro do Sul', periodo: '2024–2025' },
  { titulo: 'Técnico em Mecatrônica', local: 'ETEC Prof. Basilides de Godoy', periodo: '2021–2023' },
];

export const experiencias: Item[] = [
  { titulo: 'Auxiliar de TI (Help Desk)', local: 'UniFECAF', periodo: 'dez/2025 – atual' },
  { titulo: 'Estagiário de Help Desk', local: 'UniFECAF', periodo: 'mai/2025 – dez/2025' },
  { titulo: 'Aprendiz Técnico em Mecatrônica', local: 'ETEC Prof. Basilides de Godoy', periodo: '2021–2023' },
];

export const ferramentas: string[] = [
  'Node.js', 'React', 'SQL', 'PostgreSQL', 'MySQL', 'Linux', 'Docker', 'Windows', 'GLPI', 'Grafana', 'Google Workspace',
];

export const colunas = { formacao: 'Formação', experiencias: 'Experiências', ferramentas: 'Ferramentas' };
