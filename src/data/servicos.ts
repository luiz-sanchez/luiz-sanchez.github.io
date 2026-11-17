export type Servico = {
  numero: string;
  icone: 'Wrench' | 'Database' | 'CodeXml' | 'Server' | 'Activity' | 'Users';
  titulo: string;
  descricao: string;
  tom: 'azul' | 'claro' | 'escuro';
};

export const servicosIntro = {
  eyebrow: 'O que eu entrego',
  titulo: 'Seis frentes do meu trabalho',
};

export const servicos: Servico[] = [
  { numero: '01', icone: 'Wrench', titulo: 'Suporte', descricao: 'Atendimento N1/N2 de hardware, software, rede e impressoras.', tom: 'azul' },
  { numero: '02', icone: 'Database', titulo: 'GLPI', descricao: 'ITSM e inventário de ativos, regras de importação e API.', tom: 'claro' },
  { numero: '03', icone: 'CodeXml', titulo: 'Desenvolvimento', descricao: 'Sistemas web com Node.js, React e SQL para o time.', tom: 'claro' },
  { numero: '04', icone: 'Server', titulo: 'Infraestrutura', descricao: 'Linux, Docker/CapRover e bancos MySQL e PostgreSQL.', tom: 'claro' },
  { numero: '05', icone: 'Activity', titulo: 'Monitoramento', descricao: 'Links WAN, túneis VPN e firewall acompanhados via Grafana.', tom: 'claro' },
  { numero: '06', icone: 'Users', titulo: 'Implantação', descricao: 'GLPI em novos setores, com guia e apoio às equipes.', tom: 'escuro' },
];
