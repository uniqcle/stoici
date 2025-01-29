const { InlineKeyboard } = require("grammy");
const { getForward, getBackward } = require("../helpers/keyboard_title");

/*********************************************************/
// stoicus II. Куда стремится?
/*********************************************************/

// eudaimonia  I. В поисках эвдаймонии
const eudaimoniaKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "sapiens")
    .text(getForward(), "moderari")
    .row()
    .text("▲ Куда стремится", "quo_vadis");
};

// moderari  II. Эмоции под контролем
const moderariKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "eudaimonia")
    .text(getForward(), "animus")
    .row()
    .text("▲ Куда стремится", "quo_vadis");
};

// animus  III. Спокойствие духа
const animusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "moderari")
    .text(getForward(), "arete")
    .row()
    .text("▲ Куда стремится", "quo_vadis");
};

// arete   IV. Жизнь с арете
const areteKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "animus")
    .text(getForward(), "potentia")
    .row()
    .text("▲ Куда стремится", "quo_vadis");
};

// potentia  V. Совершенствуй свой природный потенциал.
const potentiaKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "arete")
    .text(getForward(), "virtus")
    .row()
    .text("▲ Куда стремится", "quo_vadis");
};

module.exports = {
  eudaimoniaKeyBoard, //eudaimonia  I. В поисках эвдаймонии
  moderariKeyBoard, //moderari  II. Эмоции под контролем
  animusKeyBoard, //animus  III. Спокойствие духа
  areteKeyBoard, // // arete   IV. Жизнь с арете
  potentiaKeyBoard, //potentia  V. Совершенствуй свой природный потенциал
};
