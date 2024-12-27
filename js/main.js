import { nanoid } from 'nanoid';
import { initFormSubmit } from './form-data-send.js';
import { createCookie } from './utils.js';

const adminElements = document.querySelectorAll('.admin-only');

createCookie('requestId', nanoid(30), 1);

const FormManager = (() => {
  const actionSelect = document.getElementById('action');
  const forms = {
    add: document.getElementById('addForm'),
    update: document.getElementById('updateForm'),
    deploy: document.getElementById('deployForm')
  };

  function showForm(action) {
    Object.values(forms).forEach((form) => {
      form.style.display = 'none';
    });

    if (forms[action]) {
      forms[action].style.display = 'block';
    }
  }

  function init() {
    initFormSubmit();
    actionSelect.addEventListener('change', (e) => {
      showForm(e.target.value);
    });
  }

  return {
    init
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  FormManager.init();
});

document.addEventListener('DOMContentLoaded', () => {
  // localStorage.setItem('isAdmin', 'true');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (isAdmin) {
    adminElements.forEach((element) => {
      element.classList.remove('hidden');
    });
  }
});
