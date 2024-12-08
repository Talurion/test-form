const FormManager = (() => {
    const actionSelect = document.getElementById('action');
    const forms = {
        add: document.getElementById('addForm'),
        update: document.getElementById('updateForm'),
        delete: document.getElementById('deleteForm'),
        deploy: document.getElementById('deployForm')
    };

    function showForm(action) {
        Object.values(forms).forEach(form => form.style.display = 'none');
        
        if (forms[action]) {
            forms[action].style.display = 'block';
        }
    }

    function init() {
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
