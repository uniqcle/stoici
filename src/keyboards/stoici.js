const { InlineKeyboard } = require("grammy");
const { getForward, getBackward } = require("../helpers/keyboard_title");

/*********************************************************/
// stoici Знаменитые стоики.
/*********************************************************/

// zenon      Зенон Китийский
const zenonKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "impressiones")
    .text(getForward(), "rufus")
    .row()
    .text("▲ Знаменитые стоики", "stoici");
};

// rufus      Гай Музоний Руф
const rufusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "zenon")
    .text(getForward(), "seneca")
    .row()
    .text("▲ Знаменитые стоики", "stoici");
};

// seneca Сенека
const senecaKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "rufus")
    .text(getForward(), "epictetus")
    .row()
    .text("▲ Знаменитые стоики", "stoici");
};

// epictetus  Эпиктет
const epictetusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "seneca")
    .text(getForward(), "marcus")
    .row()
    .text("▲ Знаменитые стоики", "stoici");
};

// marcus     Марк Аврелий
const marcusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "epictetus")
    .text(getForward(), "maxima_i")
    .row()
    .text("▲ Знаменитые стоики", "stoici");
};

module.exports = {
  zenonKeyBoard, // zenon      Зенон Китийский
  rufusKeyBoard, // rufus      Гай Музоний Руф
  senecaKeyBoard, // seneca Сенека
  epictetusKeyBoard, // epictetus  Эпиктет
  marcusKeyBoard, // marcus     Марк Аврелий
};
