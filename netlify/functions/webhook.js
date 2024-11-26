// webhook.js

exports.handler = async function(event, context) {
  if (event.httpMethod === "POST") {
    // Получаем данные из тела запроса
    const body = JSON.parse(event.body);

    // Здесь можно добавить обработку данных вебхука, если нужно

    // Возвращаем успешный ответ
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Webhook received successfully!',
        data: body,
      }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};
