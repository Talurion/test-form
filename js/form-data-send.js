import { dataSend } from './api.js';
import { showPopup } from './popup.js';
import { transformFormData } from './connector.js';
import { FORM_MESSAGES } from './const.js';

const forms = document.querySelectorAll('.form');

const handleFormResult = (isSuccess, form, tagId) => {
  const message = isSuccess ? FORM_MESSAGES.success[form.id] : FORM_MESSAGES.error;
  const detailedText = isSuccess ? FORM_MESSAGES.detailed[form.id] : null;

  showPopup(message, detailedText, tagId);
  form.reset();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const formData = new FormData(form);
  const { data, tagId } = transformFormData(formData, form.id);

  console.log(data);

  dataSend(data)
    .then((response) => {
      console.log(response);
      handleFormResult(true, form, tagId);
    })
    .catch((error) => {
      console.error(error);
      handleFormResult(true, form, tagId);
    });
};

const initFormSubmit = () => {
  forms.forEach((form) => {
    form.addEventListener('submit', onFormSubmit);
  });
};

export { initFormSubmit };
