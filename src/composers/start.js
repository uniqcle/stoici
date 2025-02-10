const { Composer } = require("grammy");
const { replyWithPhoto } = require("../classes/Reply");
const { startInlineKeyBoard } = require("../keyboards/start");

const start = new Composer();

start.callbackQuery("start", async (ctx) => {
  try {
    //await ctx.reply("Добро пожаловать. Запущен и работает!");

    await replyWithPhoto(ctx, "start", startInlineKeyBoard);

    // cache_time=300
    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

start.command("start", async (ctx) => {
  try {
    await replyWithPhoto(ctx, "start", startInlineKeyBoard);
  } catch (e) {
    console.log(e);
  }
});

module.exports = start;
