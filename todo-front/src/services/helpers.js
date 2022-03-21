const TODOS = 'Todos';
const HOJE = 'Hoje';
const SEMANA = 'Semana';
const MES = 'Mês';
const ANO = 'Ano';

const translation = (info) => {
  switch (info) {
    case TODOS:
      return 'all';
    case HOJE:
      return 'today';
    case SEMANA:
      return 'week';
    case MES:
      return 'month';
    case ANO:
      return 'year';
    default:
      return info;
  }
};

export default translation;
