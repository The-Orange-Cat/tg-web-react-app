const TelegramBot = require('node-telegram-bot-api');

const token = '6318127312:AAGuC9YZ92waqvWXhqnA8rzj1V2zir2WwZw'
const webAppUrl = 'https://ya.ru'
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполните форму', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполнить форму'}]
            ]
        }
    })
    await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
            ]
        }
    })
  }


  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

