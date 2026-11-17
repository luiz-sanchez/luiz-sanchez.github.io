export type Servico = {
  icone: 'Wrench' | 'Database' | 'CodeXml' | 'Server' | 'Activity' | 'Users';
  titulo: string;
  descricao: string;
};

export const servicosIntro = {
  eyebrow: 'O que eu entrego',
  titulo: 'Seis frentes do meu trabalho',
};

export const servicos: Servico[] = [
  { icone: 'Wrench', titulo: 'Suporte', descricao: 'Atendimento N1/N2 de hardware, software, rede e impressoras.' },
  { icone: 'Database', titulo: 'GLPI', descricao: 'ITSM e inventário de ativos, regras de importação e API.' },
  { icone: 'CodeXml', titulo: 'Desenvolvimento', descricao: 'Sistemas web com Node.js, React e SQL para o time.' },
  { icone: 'Server', titulo: 'Infraestrutura', descricao: 'Linux, Docker/CapRover e bancos MySQL e PostgreSQL.' },
  { icone: 'Activity', titulo: 'Monitoramento', descricao: 'Links WAN, túneis VPN e firewall acompanhados via Grafana.' },
  { icone: 'Users', titulo: 'Implantação', descricao: 'GLPI em novos setores, com guia e apoio às equipes.' },
];
