const { Composer } = require("grammy");
const { replyText, replyPhoto, replyAudio } = require("../classes/Reply");
const { is_paid } = require("../classes/User");
const { subscribe } = require("../classes/Subscription");

const {
  eudaimoniaKeyBoard, //eudaimonia  I. В поисках эвдаймонии
  moderariKeyBoard, //moderari  II. Эмоции под контролем
  animusKeyBoard, //animus  III. Спокойствие духа
  areteKeyBoard, // // arete   IV. Жизнь с арете
  potentiaKeyBoard, //potentia  V. Совершенствуй свой природный потенциал
} = require("../keyboards/quo_vadis");

const quo_vadis = new Composer();

/*********************************************************/
// quo_vadis II. Куда стремится? 
/*********************************************************/

// eudaimonia I. В поисках эвдаймонии
quo_vadis.callbackQuery("eudaimonia", async (ctx) => {
  try {
    await replyPhoto(ctx, "eudaimonia");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "eudaimonia");
      await replyText(ctx, "eudaimonia", eudaimoniaKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quo_vadis.command("eudaimonia", async (ctx) => {
  try {
    await replyPhoto(ctx, "eudaimonia");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "eudaimonia");
      await replyText(ctx, "eudaimonia", eudaimoniaKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// moderari  II. Эмоции под контролем
/*********************************************************/
quo_vadis.callbackQuery("moderari", async (ctx) => {
  try {
    await replyPhoto(ctx, "moderari");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "moderari");
      await replyText(ctx, "moderari", moderariKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quo_vadis.command("moderari", async (ctx) => {
  try {
    await replyPhoto(ctx, "moderari");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "moderari");
      await replyText(ctx, "moderari", moderariKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// animus   III. Спокойствие духа
/*********************************************************/
quo_vadis.callbackQuery("animus", async (ctx) => {
  try {
    await replyPhoto(ctx, "animus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "animus");
      await replyText(ctx, "animus", animusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quo_vadis.command("animus", async (ctx) => {
  try {
    await replyPhoto(ctx, "animus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "animus");
      await replyText(ctx, "animus", animusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// arete  IV. Жизнь с арете
/*********************************************************/
quo_vadis.callbackQuery("arete", async (ctx) => {
  try {
    await replyPhoto(ctx, "arete");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "arete");
      await replyText(ctx, "arete", areteKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quo_vadis.command("arete", async (ctx) => {
  try {
    await replyPhoto(ctx, "arete");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "arete");
      await replyText(ctx, "arete", areteKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// potentia  V. Совершенствуй свой природный потенциал. 
/*********************************************************/
quo_vadis.callbackQuery("potentia", async (ctx) => {
  try {
    await replyPhoto(ctx, "potentia");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "potentia");
      await replyText(ctx, "potentia", potentiaKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quo_vadis.command("potentia", async (ctx) => {
  try {
    await replyPhoto(ctx, "potentia");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "potentia");
      await replyText(ctx, "potentia", potentiaKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


module.exports = quo_vadis;