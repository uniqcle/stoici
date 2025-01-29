const { InlineKeyboard,  } = require("grammy");

const subscribeKeyBoard = () => {
  return new InlineKeyboard()
    .text("Оформить подписку", "subscription")
    .row()
    .text("▲ В начало", "start");
};

const subscriptionKeyBoard = () => {
  return new InlineKeyboard()
    .text("на 1 месяц - 499 руб.", "pretium_i")
    .text("на 3 месяца - 799 руб.", "pretium_ii")
    .row()
    .text("▲ В начало", "start");
};

const payKeyBoard = (payLink) => {
  return new InlineKeyboard()
    .url("💳 Перейти к оплате", payLink)
    .row()
    .text("◄ Назад", "subscription");
};

const errorPayKeyBoard = () => {
  return new InlineKeyboard().text("▲ В начало", "start");
};

module.exports = {
  subscriptionKeyBoard,
  subscribeKeyBoard,
  payKeyBoard,
  errorPayKeyBoard,
}; 