export type Servico = {
  titulo: string;
  descricao: string;
};

export const servicosIntro = {
  titulo: 'Seis frentes do meu trabalho',
};

export const servicos: Servico[] = [
  { titulo: 'Suporte', descricao: 'Atendimento N1/N2 de hardware, software, rede e impressoras.' },
  { titulo: 'GLPI', descricao: 'ITSM e inventário de ativos, regras de importação e API.' },
  { titulo: 'Desenvolvimento', descricao: 'Sistemas web com Node.js, React e SQL para o time.' },
  { titulo: 'Infraestrutura', descricao: 'Linux, Docker/CapRover e bancos MySQL e PostgreSQL.' },
  { titulo: 'Monitoramento', descricao: 'Links WAN, túneis VPN e firewall acompanhados via Grafana.' },
  { titulo: 'Implantação', descricao: 'GLPI em novos setores, com guia e apoio às equipes.' },
];
