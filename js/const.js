const FORM_MESSAGES = {
  success: {
    addForm: 'Данные успешно отправлены',
    updateForm: 'Срок жизни тега успешно обновлен',
    deployForm: 'Заявка отправлена администратору GTM',
  },
  error: 'Что-то пошло не так, обновите страницу и попробуйте снова',
  detailed: {
    addForm: 'Сохраните идентификатор тега GTM',
    updateForm: '',
    deployForm: '',
  }
};

const ID_LENGTH = 10;

export { FORM_MESSAGES, ID_LENGTH };
