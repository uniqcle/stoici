const { Composer } = require("grammy");

const {
  replyWithPhotoMaximes,
  replyEditMessage,
  replyWithText,
} = require("../classes/Reply");

const {
  maximesKeyBoard1,
  maximesKeyBoard2,
  maximesKeyBoard3,
  maximesKeyBoard4,
  maximesKeyBoard5,
} = require("../keyboards/maximes");

const maximes = new Composer();

/*********************************************************/
// Maximes
/*********************************************************/

maximes.command("maximes", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "first");

    await replyWithText(ctx, "first", maximesKeyBoard1);
  } catch (e) {
    console.log(e);
  }
});

maximes.callbackQuery("maximes", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "first");

    await replyWithText(ctx, "first", maximesKeyBoard1);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// maximes 1
/*********************************************************/
maximes.command("first", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "first");

    await replyWithText(ctx, "first", maximesKeyBoard1);
  } catch (e) {
    console.log(e);
  }
});

maximes.callbackQuery("first", async (ctx) => {
  try {
    await replyEditMessage(ctx, "first", maximesKeyBoard1);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// maximes 2
/*********************************************************/
maximes.command("second", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "second");

    await replyWithText(ctx, "second", maximesKeyBoard2);
  } catch (e) {
    console.log(e);
  }
});

maximes.callbackQuery("second", async (ctx) => {
  try {
    await replyEditMessage(ctx, "second", maximesKeyBoard2);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// maximes 3
/*********************************************************/
maximes.command("third", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "third");

    await replyWithText(ctx, "third", maximesKeyBoard3);
  } catch (e) {
    console.log(e);
  }
});

maximes.callbackQuery("third", async (ctx) => {
  try {
    await replyEditMessage(ctx, "third", maximesKeyBoard3);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// maximes 4
/*********************************************************/
maximes.command("fourth", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "fourth");

    await replyWithText(ctx, "fourth", maximesKeyBoard4);
  } catch (e) {
    console.log(e);
  }
});

maximes.callbackQuery("fourth", async (ctx) => {
  try {
    await replyEditMessage(ctx, "fourth", maximesKeyBoard4);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// maximes 5
/*********************************************************/
maximes.command("fifth", async (ctx) => {
  try {
    await replyWithPhotoMaximes(ctx, "fifth");

    await replyWithText(ctx, "fifth", maximesKeyBoard5);
  } catch (e) {
    console.log(e);
  }
});

maximes.callbackQuery("fifth", async (ctx) => {
  try {
    await replyEditMessage(ctx, "fifth", maximesKeyBoard5);

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

module.exports = maximes;
