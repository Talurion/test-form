// script.js

// Модуль для управления формами
const FormManager = (() => {
    const actionSelect = document.getElementById('action');
    const forms = {
        add: document.getElementById('addForm'),
        update: document.getElementById('updateForm'),
        delete: document.getElementById('deleteForm'),
        deploy: document.getElementById('deployForm')
    };

    // Показать форму по выбранному действию
    function showForm(action) {
        // Скрываем все формы
        Object.values(forms).forEach(form => form.style.display = 'none');
        
        // Показываем соответствующую форму
        if (forms[action]) {
            forms[action].style.display = 'block';
        }
    }

    // Инициализация события для выпадающего списка
    function init() {
        actionSelect.addEventListener('change', (e) => {
            showForm(e.target.value);
        });
    }

    return {
        init
    };
})();

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    FormManager.init();
});

