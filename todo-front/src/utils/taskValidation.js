const validate = ({ type, title, description, date, hour }) => {
  if (!type) return { message: 'O campo "Tipo" é obrigatório. Escolha um ícone!' };
  if (!title) return { message: 'O campo "Título" é obrigatório!' };
  if (!description) return { message: 'O campo "Descrição" é obrigatório!' };
  if (!date) return { message: 'O campo "Data" é obrigatório!' };
  if (!hour) return { message: 'O campo "Horário" é obrigatório!' };
  return 'Ok';
};

export default validate;
