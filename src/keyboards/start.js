const {
  Keyboard,
  InlineKeyboard,
} = require("grammy");


const startKeyBoard = () => {
  return new Keyboard()
    .text("Основы стоицизма", "fundamentum")
    .text("Максимы", "maximes")
    .row()
    .text("Подписка", "subscription")
    .text("Поддержка", "support").resized().oneTime();
}

const startInlineKeyBoard = () => {
  return new InlineKeyboard()
    .text("⍶ Основы стоицизма", "fundamentum")
    .text("ᶆ Максимы", "maximes")
    .row()
    .text("Подписка", "subscription");
  //.text("Поддержка", "support");
};

module.exports = {
  startKeyBoard,
  startInlineKeyBoard,
};
