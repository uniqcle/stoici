const { InlineKeyboard } = require("grammy");

// Основы
const fundamentumInlineKeyBoard = () => {
  return new InlineKeyboard()
    .text("Ⅰ. Кто такой стоик", "stoicus")
    .row()
    .text("Ⅱ. Куда стремится", "quo_vadis")
    .row()
    .text("Ⅲ. Чем руководствуется", "quid_motivum")
    .row()
    .text("Ⅳ. С чем сталкивается на пути", "in_via")
    .row()
    .text("Ⅴ. Знаменитые стоики", "stoici")
    .row()
    .text("▲ В начало", "start")
    .text("Максимы »", "maximes");
};

// Ⅰ. Кто такой стоик?
const stoicusInlineKeyBoard = () => {
  return new InlineKeyboard()
    .text("▲ В Основы", "fundamentum")
    .text("Ⅱ. Куда стремится »", "quo_vadis");
}


//Ⅱ. Куда стремится?
const quoVadisInlineKeyBoard = () => {
	return new InlineKeyboard()
    .text("« Ⅰ. Кто такой стоик?", "stoicus")
    .text("Ⅲ. Чем руководствуется? »", "quid_motivum")
    .row()
    .text("▲ В основы", "fundamentum");
}

// Ⅲ. Чем руководствуется?
const quidMotivumInlineKeyBoard = () => {
  return new InlineKeyboard()
    .text("« Ⅱ. Куда стремится", "quo_vadis")
    .text("Ⅳ. С чем сталкивается на пути »", "in_via")
    .row()
    .text("▲ В основы", "fundamentum");
}

// Ⅳ. С чем сталкивается на пути
const inViaInlineKeyBoard = () => {
  return new InlineKeyboard()
    .text("« Ⅲ. Чем руководствуется", "quid_motivum")
    .text("Ⅴ. Знаменитые стоики »", "stoici")
    .row()
    .text("▲ В основы", "fundamentum");
}

// Ⅴ. Знаменитые стоики
const stoiciInlineKeyBoard = () => {
	return new InlineKeyboard()
    .text("« Ⅳ. С чем сталкивается?", "in_via")
    .text("Максимы »", "maximes")
    .row()
    .text("▲ В основы", "fundamentum");
}


module.exports = {
  fundamentumInlineKeyBoard,    // Основы
  stoicusInlineKeyBoard,       // Ⅰ.Кто такой стоик?
  quoVadisInlineKeyBoard,     // Ⅱ. Куда стремится?
  quidMotivumInlineKeyBoard, // // Ⅲ. Чем руководствуется?
  inViaInlineKeyBoard,      // Ⅳ. С чем сталкивается на пути
  stoiciInlineKeyBoard,    // Ⅴ. Знаменитые стоики
};
