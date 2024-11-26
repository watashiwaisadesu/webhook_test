// webhook.js

const VERIFY_TOKEN = "your_verify_token"; // Replace with your actual verify token

exports.handler = async function(event, context) {
  // Handle GET request (used for verification)
  if (event.httpMethod === "GET") {
    const queryParams = event.queryStringParameters;

    // Check if the request is for webhook verification
    if (queryParams['hub.mode'] === 'subscribe' && queryParams['hub.verify_token'] === VERIFY_TOKEN) {
      // Return the challenge code to confirm the webhook subscription
      return {
        statusCode: 200,
        body: queryParams['hub.challenge'],
      };
    } else {
      // If the verification token does not match
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "Forbidden: Invalid verification token" }),
      };
    }
  }

  // Handle POST request (webhook notification)
  if (event.httpMethod === "POST") {
    // Получаем данные из тела запроса
    const body = JSON.parse(event.body);

    // Здесь можно добавить обработку данных вебхука, если нужно
    console.log("Webhook data:", body);

    // Возвращаем успешный ответ
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Webhook received successfully!',
        data: body,
      }),
    };
  }

  // If HTTP method is not GET or POST
  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};
