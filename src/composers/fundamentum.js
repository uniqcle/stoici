const { InputFile, Composer } = require("grammy");
const {
  fundamentumInlineKeyBoard, // Основы
  stoicusInlineKeyBoard, // Ⅰ.Кто такой стоик?
  quoVadisInlineKeyBoard, // Ⅱ. Куда стремится?
  quidMotivumInlineKeyBoard, // // Ⅲ. Чем руководствуется?
  inViaInlineKeyBoard, // Ⅳ. С чем сталкивается на пути
  stoiciInlineKeyBoard, // Ⅴ. Знаменитые стоики
} = require("../keyboards/fundamentum");

const { replyWithPhoto } = require("../classes/Reply");

const fundamentum = new Composer();

/*********************************************************/
// Основы
/*********************************************************/
fundamentum.command("fundamentum", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "fundamentum", fundamentumInlineKeyBoard);
    //console.log(ctx.user.first_name);
  } catch (e) {
    console.log(e);
  }
});

fundamentum.callbackQuery("fundamentum", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "fundamentum", fundamentumInlineKeyBoard);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Ⅰ.Кто такой стоик?
/*********************************************************/
fundamentum.command("stoicus", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "stoicus", stoicusInlineKeyBoard);
    //console.log(ctx.user.first_name);
  } catch (e) {
    console.log(e);
  }
});

fundamentum.callbackQuery("stoicus", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "stoicus", stoicusInlineKeyBoard);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Ⅱ. Куда стремится?
/*********************************************************/
fundamentum.command("quo_vadis", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "quo_vadis", quoVadisInlineKeyBoard);
    //console.log(ctx.user.first_name);
  } catch (e) {
    console.log(e);
  }
});

fundamentum.callbackQuery("quo_vadis", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "quo_vadis", quoVadisInlineKeyBoard);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Ⅲ. Чем руководствуется?
/*********************************************************/
fundamentum.command("quid_motivum", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "quid_motivum", quidMotivumInlineKeyBoard);
    //console.log(ctx.user.first_name);
  } catch (e) {
    console.log(e);
  }
});

fundamentum.callbackQuery("quid_motivum", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "quid_motivum", quidMotivumInlineKeyBoard);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Ⅳ. С чем сталкивается на пути
/*********************************************************/
fundamentum.command("in_via", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "in_via", inViaInlineKeyBoard);
    //console.log(ctx.user.first_name);
  } catch (e) {
    console.log(e);
  }
});

fundamentum.callbackQuery("in_via", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "in_via", inViaInlineKeyBoard);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Знаменитые стоики
/*********************************************************/
fundamentum.command("stoici", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "stoici", stoiciInlineKeyBoard);
    //console.log(ctx.user.first_name);
  } catch (e) {
    console.log(e);
  }
});

fundamentum.callbackQuery("stoici", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "stoici", stoiciInlineKeyBoard);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

module.exports = fundamentum;
