const { InlineKeyboard } = require("grammy");
const { getForward, getBackward } = require("../helpers/keyboard_title");

/*********************************************************/
// quid_motivum Чем руководствуется?
/*********************************************************/

// virtus	 4 главных добродетели.
const virtusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "potentia")
    .text(getForward(), "dichotomia")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// dichotomia	Дихотомия контроля.
const dichotomiaKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "virtus")
    .text(getForward(), "processus")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// processus	Фокусируйся на процессе
const processusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "dichotomia")
    .text(getForward(), "acceptatio")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// acceptatio	Стоическое принятие
const acceptatioKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "processus")
    .text(getForward(), "praeferre")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// praeferre	О хорошем, плохом и нейтральном.
const praeferreKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "acceptatio")
    .text(getForward(), "theatrum")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// theatrum	Жизнь - это твоя игра
const theatrumKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "praeferre")
    .text(getForward(), "responsalitas")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// responsalitas 	Принцип ответственности
const responsalitasKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "theatrum")
    .text(getForward(), "delectus")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// delectus	Свобода выбора
const delectusKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "responsalitas")
    .text(getForward(), "ratio")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// ratio		Работа нашего разума
const ratioKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "delectus")
    .text(getForward(), "logos")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

// societas	Действуй на общее благо
// const societasKeyBoard = () => {
//   return new InlineKeyboard()
//     .text(getBackward(), "ratio")
//     .text(getForward(), "logos")
//     .row()
//     .text("▲ Чем руководствуется", "quid_motivum");
// };

// societas	Действуй на общее благо
const logosKeyBoard = () => {
  return new InlineKeyboard()
    .text(getBackward(), "ratio")
    .text(getForward(), "affectus")
    .row()
    .text("▲ Чем руководствуется", "quid_motivum");
};

module.exports = {
  virtusKeyBoard, // virtus	 4 главных добродетели.
  dichotomiaKeyBoard, // dichotomia	Дихотомия контроля.
  processusKeyBoard, // processus	Фокусируйся на процессе
  acceptatioKeyBoard, // acceptatio	Стоическое принятие
  praeferreKeyBoard, // praeferre	О хорошем, плохом и нейтральном.
  theatrumKeyBoard, // theatrum	Жизнь - это твоя игра
  responsalitasKeyBoard, // responsalitas 	Принцип ответственности
  delectusKeyBoard, // delectus	Свобода выбора
  ratioKeyBoard, // ratio	Работа нашего разума
  //societasKeyBoard, // societas	Действуй на общее благо
  logosKeyBoard, // societas	Действуй на общее благо
};
