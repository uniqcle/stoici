const { Composer } = require("grammy");
const { replyText, replyPhoto, replyAudio } = require("../classes/Reply");
const { is_paid } = require("../classes/User");
const { subscribe } = require("../classes/Subscription");

const { praefatioKeyBoard, sapiensKeyBoard } = require("../keyboards/stoicus");

const stoicus = new Composer();

/*********************************************************/
// stoicus I. Кто такой стоик?
/*********************************************************/

// praefatio   I. Сила стоицизма.
stoicus.callbackQuery("praefatio", async (ctx) => {
  try {
    await replyPhoto(ctx, "praefatio");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "praefatio");
      await replyText(ctx, "praefatio", praefatioKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoicus.command("praefatio", async (ctx) => {
  try {
    await replyPhoto(ctx, "praefatio");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "praefatio");
      await replyText(ctx, "praefatio", praefatioKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

// sapiens   II. Воспитай в себе воителя-мудреца
stoicus.callbackQuery("sapiens", async (ctx) => {
  try {
    await replyPhoto(ctx, "sapiens");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "sapiens");
      await replyText(ctx, "sapiens", sapiensKeyBoard);
    } else {
      await subscribe(ctx);
    }

    // cache_time=300
    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoicus.command("sapiens", async (ctx) => {
  try {
    await replyPhoto(ctx, "sapiens");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "sapiens");
      await replyText(ctx, "sapiens", sapiensKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = stoicus;
