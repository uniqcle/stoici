const { InlineKeyboard } = require("grammy");
const { getForward, getBackward } = require("../helpers/keyboard_title");

/*********************************************************/
// stoicus I. Кто такой стоик?
/*********************************************************/

// praefatio   I. Сила стоицизма.
const praefatioKeyBoard = () => {
  return new InlineKeyboard()
    .text("▲ Кто такой стоик?", "stoicus")
    .text(getForward(), "sapiens");
};

// sapiens   II. Воспитай в себе воителя-мудреца
const sapiensKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "praefatio")
    .text(getForward(), "eudaimonia")
    .row()
    .text("▲ Кто такой стоик", "stoicus");
};

module.exports = {
  praefatioKeyBoard, //praefatio I. Сила стоицизма.
  sapiensKeyBoard, //sapiens    II. Воспитай в себе воителя-мудреца
};