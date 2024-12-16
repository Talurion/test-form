import { dataSend } from './api.js';
import { showPopup } from './popup.js';

const ERROR_TEXT = 'Что то пошло не так, попробуйте снова';
const DETAILED_TEXT = 'Сохраните идентификатор тега GTM';

const onSuccess = (response) => {
  showPopup (response);
};

const onError = (error) => {
  console.error(error);
  showPopup (ERROR_TEXT, DETAILED_TEXT, '99999999');
};

const forms = document.querySelectorAll('.form');

const onFormSubmit = (evt, successCallback, errorCallback) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData.entries());

  dataSend(data)
    .then((response) => successCallback(response))
    .catch((error) => errorCallback(error));
};

const initFormSubmit = () => {
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => onFormSubmit(evt, onSuccess, onError));
  });
};


export { initFormSubmit };
