const { InlineKeyboard } = require("grammy");
const { getForward, getBackward } = require("../helpers/keyboard_title");


/*********************************************************/
// in_via С чем сталкивается на пути?
/*********************************************************/

// affectus	Наши негативные эмоции
const affectusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "logos")
    .text(getForward(), "desideria")
    .row()
    .text("▲ С чем сталкивается на пути", "in_via");
};

// desideria 	Желаем то, что нам не подконтрольно
const desideriaKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "affectus")
    .text(getForward(), "impressiones")
    .row()
    .text("▲ С чем сталкивается на пути", "in_via");
};

// impressiones	Во власти впечатлений
const impressionesKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "desideria")
    .text(getForward(), "zenon")
    .row()
    .text("▲ С чем сталкивается на пути", "in_via");
};

// timor Обеспокоенной или непоколебимый
// const timoreKeyBoard = () => {
//   return new InlineKeyboard()
//     .text("« Шаг назад", "impressiones")
//     .text(getForward(), "zenon")
//     .row()
//     .text("▲ С чем сталкивается на пути", "in_via");
// };

module.exports = {
  affectusKeyBoard, // affectus	Наши негативные эмоции
  desideriaKeyBoard, // desideria 	Желаем то, что нам не подконтрольно
  impressionesKeyBoard, // impressiones	Во власти впечатлений
  //timoreKeyBoard, // timor Обеспокоенной или непоколебимый
};


