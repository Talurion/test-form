import { dataSend } from './api.js';

const forms = document.querySelectorAll('.form');

const onFormSubmit = (evt, successCallback, errorCallback) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const data = Object.fromEntries(formData.entries());

  dataSend(data)
    .then(successCallback)
    .catch(errorCallback);
};

const initFormSubmit = (successCallback, errorCallback) => {
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => onFormSubmit(evt, successCallback, errorCallback));
  });
};


export { initFormSubmit };
