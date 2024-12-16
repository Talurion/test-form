import { dataSend } from './api.js';
import { showPopup } from './popup.js';
import { nanoid } from 'nanoid';

const forms = document.querySelectorAll('.form');

const ID_LENGTH = 10;
const SUCCESS_TEXT = 'Данные успешно отправлены';
const ERROR_TEXT = 'Что-то пошло не так, обновите страницу и попробуйте снова';
const DETAILED_TEXT = 'Сохраните идентификатор тега GTM';

const parseLifetime = (lifetime) => {
  const parsed = parseInt(lifetime, 10);
  return !isNaN(parsed) ? parsed : null;
};

const handleFormResult = (isSuccess, form, tagId) => {
  const message = isSuccess ? SUCCESS_TEXT : ERROR_TEXT;
  const detailedText = isSuccess && form.id === 'addForm' ? DETAILED_TEXT : null;

  showPopup(message, detailedText, tagId);
  form.reset();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const formId = form.id;
  let tagId = null;
  const date = new Date();
  const dateEnd = new Date(date);

  const formData = new FormData(form);
  const newFormData = Object.fromEntries(formData.entries());

  if (newFormData.lifetime) {
    const lifetime = parseLifetime(newFormData.lifetime);
    if (lifetime) {
      newFormData.lifetime = lifetime;
      dateEnd.setDate(dateEnd.getDate() + (lifetime * 30));
    } else {
      delete newFormData.lifetime;
    }
  }

  if (newFormData.lifetimeUpdate) {
    const lifetimeUpdate = parseLifetime(newFormData.lifetimeUpdate);
    if (lifetimeUpdate) {
      newFormData.lifetimeUpdate = lifetimeUpdate;
    } else {
      delete newFormData.lifetimeUpdate;
    }
  }

  if (formId === 'addForm') {
    tagId = nanoid(ID_LENGTH);
  }

  const data = {
    formId: formId,
    tagId: tagId,
    date: date.toISOString(),
    ...newFormData,
    ...(formId === 'addForm' && { dateEnd: dateEnd.toISOString() })
  };

  console.log(data);

  dataSend(data)
    .then((response) => {
      console.log(response);
      handleFormResult(true, form, tagId);
    })
    .catch((error) => {
      console.error(error);
      handleFormResult(false, form);
    });
};

const initFormSubmit = () => {
  forms.forEach((form) => {
    form.addEventListener('submit', onFormSubmit);
  });
};

export { initFormSubmit };
