const API_ROUTE = {
  POST: '',
  POST_TEST: 'https://script.google.com/macros/s/AKfycbwUs-tTb61wYcmghtA0kngYzC1uRPfQ_qb00ALpvNQWNHRb6s7JA76s9PiNysmYfLOM/exec',
};

const dataSend = async (data) => {
  const response = await fetch(API_ROUTE.POST_TEST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export { dataSend };

