// script.js

// URL для получения данных вебхука
const webhookUrl = '/.netlify/functions/webhook';

// Функция для получения данных и обновления страницы
async function fetchWebhookData() {
  try {
    const response = await fetch(webhookUrl);
    const data = await response.json();

    // Отображаем полученные данные
    document.getElementById('webhook-data').innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById('webhook-data').innerText = 'Error fetching data';
    console.error('Error fetching webhook data:', error);
  }
}

// Запускаем функцию для получения данных с интервалом в 5 секунд
setInterval(fetchWebhookData, 5000);
