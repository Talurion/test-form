const API_ROUTE = {
  POST: '',
  POST_TEST: 'https://script.google.com/macros/s/AKfycbwUs-tTb61wYcmghtA0kngYzC1uRPfQ_qb00ALpvNQWNHRb6s7JA76s9PiNysmYfLOM/exec',
};

const dataSend = async (successCallback, errorCallback, data) => {
  try {
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

    const responseData = await response.json();
    successCallback(responseData);

  } catch (error) {
    errorCallback(error);
  }
};

export { dataSend };

