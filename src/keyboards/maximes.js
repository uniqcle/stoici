const { InlineKeyboard } = require("grammy");

const maximesKeyBoard1 = () => {
  return new InlineKeyboard()
    .text("· 1 ·", "first")
    .text("2", "second")
    .text("3", "third")
    // .text("4", "fourth")
    // .text("5", "fifth")
    .row()
    .text("▲ В начало", "start");
};

const maximesKeyBoard2 = () => {
  return new InlineKeyboard()
    .text("1", "first")
    .text("· 2 ·", "second")
    .text("3", "third")
    // .text("4", "fourth")
    // .text("5", "fifth")
    .row()
    .text("▲ В начало", "start");
};

const maximesKeyBoard3= () => {
  return new InlineKeyboard()
    .text("1", "first")
    .text("2", "second")
    .text("· 3 ·", "third")
    // .text("4", "fourth")
    // .text("5", "fifth")
    .row()
    .text("▲ В начало", "start");
};

// const maximesKeyBoard4 = () => {
//   return new InlineKeyboard()
//     .text("1", "first")
//     .text("2", "second")
//     .text("3", "third")
//     .text("· 4 ·", "fourth")
//     .text("5", "fifth")
//     .row()
//     .text("▲ В начало", "start");
// };

// const maximesKeyBoard5 = () => {
//   return new InlineKeyboard()
//     .text("1", "first")
//     .text("5", "second")
//     .text("3", "third")
//     .text("4", "fourth")
//     .text("· 5 ·", "fifth")
//     .row()
//     .text("▲ В начало", "start");
// };

module.exports = {
  maximesKeyBoard1,
  maximesKeyBoard2,
  maximesKeyBoard3,
  // maximesKeyBoard4,
  // maximesKeyBoard5,
};
