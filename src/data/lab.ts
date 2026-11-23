export type Trabalho = { titulo: string; descricao: string; tags: string[]; icone: 'terminal' | 'patch' | 'grafico'; tom: [string, string] };

export const labIntro = {
  titulo: 'Outros trabalhos',
  texto: 'Ferramentas do dia a dia da TI que não viraram projeto com tela, mas que seguram o suporte funcionando.',
};

export const lab: Trabalho[] = [
  {
    titulo: 'Menu de administração do GLPI',
    descricao:
      'Ferramenta de terminal para a equipe de TI cuidar do GLPI sem mexer direto no banco: palavras-chave de categorização, chamados, usuários, relatórios e diagnóstico. Toda mudança mostra uma prévia, faz backup e pode ser desfeita.',
    tags: ['Bash', 'PHP', 'MySQL'],
    icone: 'terminal',
    tom: ['#1d1d1f', '#3a3a3c'],
  },
  {
    titulo: 'Correções do GLPI que não se perdem',
    descricao:
      'As personalizações no código do GLPI, como status por setor e painéis por setor, ficam guardadas como patches. Um agendamento reaplica tudo depois de cada atualização e abre um chamado se algo não encaixar.',
    tags: ['Docker', 'Bash', 'Cron'],
    icone: 'patch',
    tom: ['#8a4200', '#d97a12'],
  },
  {
    titulo: 'Monitoramento da rede no Grafana',
    descricao: 'Painéis que acompanham os links WAN, os túneis VPN e o firewall, para ver um problema de rede antes de virar chamado.',
    tags: ['Grafana', 'Redes'],
    icone: 'grafico',
    tom: ['#0a5f48', '#1f9a73'],
  },
];
