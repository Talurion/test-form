const API_ROUTE = {
  POST: '',
};

const dataSend = async (data) => {
  const response = await fetch(API_ROUTE.POST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'same-origin',
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

export { dataSend };
