import { END_POINT } from "./const";

document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
     });
    
    const newlifeTime = parseInt(data.lifetime.split(" ")[0], 10);
    delete data.lifetime;
    const dataConnector = {
        ...data,
        'lifeTime': newlifeTime,
    };

    fetch(END_POINT, {
        redirect: 'follow',
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('ошибка');
        }
        return response.json();
    })
    .then(data => {
        console.log('Успех:', data);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
});

console.log('привет');