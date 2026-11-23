export const casoGlpi = {
  titulo: 'GLPI em todos os setores',
  linha: 'Como o sistema de chamados da TI passou a receber e organizar os pedidos dos outros setores da UniFECAF.',
  setores: ['Service Desk', 'Gente e Gestão', 'Permanência', 'Diplomas', 'Cobrança', 'Financeiro', 'Diretoria Acadêmica'],
  problema: [
    'O GLPI era usado só pela TI. Os outros setores também recebem pedidos o dia todo e precisavam de um lugar para registrar, separar e acompanhar cada um, com as regras de cada equipe.',
  ],
  feito: [
    { titulo: 'Uma fila para cada setor', texto: 'Cada setor ganhou o próprio modelo de chamado, que pede categoria e descrição, além de perfis e grupos para cada equipe ver só a sua fila.' },
    { titulo: 'Categoria automática', texto: 'Regras de palavras-chave leem o título e o texto do chamado e já colocam o pedido na categoria certa, sem triagem manual.' },
    { titulo: 'Status do jeito de cada setor', texto: 'Setores com fluxo diferente ganharam status próprios, como "Aguardando colaborador" e "Atendimento presencial" em Gente e Gestão.' },
    { titulo: 'Implantação acompanhada', texto: 'Escrevi um guia de implantação e dei apoio presencial às equipes nas primeiras semanas de uso.' },
    { titulo: 'Manutenção segura', texto: 'Um menu de administração e patches que se reaplicam sozinhos mantêm tudo funcionando depois de cada atualização do GLPI.' },
  ],
  // Números do resultado: só aparecem na página os que estiverem preenchidos aqui
  numeros: [
    { valor: '7', rotulo: 'setores atendendo pelo GLPI' },
  ] as { valor: string; rotulo: string }[],
  resultado: [
    'Os pedidos desses setores passaram a ter registro, responsável e histórico no mesmo sistema da TI.',
    'A triagem ficou automática na maior parte dos casos, e cada equipe passou a enxergar só a própria fila.',
  ],
};
