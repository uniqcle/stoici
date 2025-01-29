const { Composer } = require("grammy");
const { replyText, replyPhoto, replyAudio } = require("../classes/Reply");
const { is_paid } = require("../classes/User");
const { subscribe } = require("../classes/Subscription");

const {
  zenonKeyBoard, // zenon      Зенон Китийский
  rufusKeyBoard, // rufus      Гай Музоний Руф
  senecaKeyBoard, // seneca Сенека
  epictetusKeyBoard, // epictetus  Эпиктет
  marcusKeyBoard, // marcus     Марк Аврелий
} = require("../keyboards/stoici");

const stoici = new Composer();

/*********************************************************/
// stoici Знаменитые стоики. 
/*********************************************************/

// zenon      Зенон Китийский
stoici.callbackQuery("zenon", async (ctx) => {
  try {
    await replyPhoto(ctx, "zenon");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "zenon");
      await replyText(ctx, "zenon", zenonKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoici.command("zenon", async (ctx) => {
  try {
    await replyPhoto(ctx, "zenon");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "zenon");
      await replyText(ctx, "zenon", zenonKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


// rufus      Гай Музоний Руф
stoici.callbackQuery("rufus", async (ctx) => {
  try {
    await replyPhoto(ctx, "rufus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "rufus");
      await replyText(ctx, "rufus", rufusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoici.command("rufus", async (ctx) => {
  try {
    await replyPhoto(ctx, "rufus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "rufus");
      await replyText(ctx, "rufus", rufusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});



// seneca     Сенека
stoici.callbackQuery("seneca", async (ctx) => {
  try {
    await replyPhoto(ctx, "seneca");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "seneca");
      await replyText(ctx, "seneca", senecaKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoici.command("seneca", async (ctx) => {
  try {
    await replyPhoto(ctx, "seneca");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "seneca");
      await replyText(ctx, "seneca", senecaKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


// epictetus  Эпиктет
stoici.callbackQuery("epictetus", async (ctx) => {
  try {
    await replyPhoto(ctx, "epictetus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "epictetus");
      await replyText(ctx, "epictetus", epictetusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoici.command("epictetus", async (ctx) => {
  try {
    await replyPhoto(ctx, "epictetus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "epictetus");
      await replyText(ctx, "epictetus", epictetusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


// marcus     Марк Аврелий
stoici.callbackQuery("marcus", async (ctx) => {
  try {
    await replyPhoto(ctx, "marcus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "marcus");
      await replyText(ctx, "marcus", marcusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

stoici.command("marcus", async (ctx) => {
  try {
    await replyPhoto(ctx, "marcus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "marcus");
      await replyText(ctx, "marcus", marcusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


module.exports = stoici; 