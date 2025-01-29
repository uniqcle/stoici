const { Composer } = require("grammy");
const { replyText, replyPhoto, replyAudio } = require("../classes/Reply");
const { is_paid } = require("../classes/User");
const { subscribe } = require("../classes/Subscription");

const {
  affectusKeyBoard, // affectus	Наши негативные эмоции
  desideriaKeyBoard, // desideria 	Желаем то, что нам не подконтрольно
  impressionesKeyBoard, // impressiones	Во власти впечатлений
  timoreKeyBoard, // timor Обеспокоенной или непоколебимый
} = require("../keyboards/in_via");

const in_via = new Composer();

/*********************************************************/
// in_via С чем сталкивается на пути?
/*********************************************************/

// affectus	Наши негативные эмоции
in_via.callbackQuery("affectus", async (ctx) => {
  try {
    await replyPhoto(ctx, "affectus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "affectus");
      await replyText(ctx, "affectus", affectusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

in_via.command("affectus", async (ctx) => {
  try {
    await replyPhoto(ctx, "affectus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "affectus");
      await replyText(ctx, "affectus", affectusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


// desideria 	Желаем то, что нам не подконтрольно
in_via.callbackQuery("desideria", async (ctx) => {
  try {
    await replyPhoto(ctx, "desideria");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "desideria");
      await replyText(ctx, "desideria", desideriaKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

in_via.command("desideria", async (ctx) => {
  try {
    await replyPhoto(ctx, "desideria");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "desideria");
      await replyText(ctx, "desideria", desideriaKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


// impressiones	Во власти впечатлений
in_via.callbackQuery("impressiones", async (ctx) => {
  try {
    await replyPhoto(ctx, "impressiones");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "impressiones");
      await replyText(ctx, "impressiones", impressionesKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

in_via.command("impressiones", async (ctx) => {
  try {
    await replyPhoto(ctx, "impressiones");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "impressiones");
      await replyText(ctx, "impressiones", impressionesKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


// timor		Обеспокоенной или непоколебимый.
// in_via.callbackQuery("timore", async (ctx) => {
//   try {
//     await replyPhoto(ctx, "timore");

//     if (is_paid(ctx)) {
//       await replyAudio(ctx, "timore");
//       await replyText(ctx, "timore", timoreKeyBoard);
//     } else {
//       await subscribe(ctx);
//     }

//     await ctx.answerCallbackQuery();
//   } catch (e) {
//     console.log(e);
//   }
// });

// in_via.command("timore", async (ctx) => {
//   try {
//     await replyPhoto(ctx, "timore");

//     if (is_paid(ctx)) {
//       await replyAudio(ctx, "timore");
//       await replyText(ctx, "timore", timoreKeyBoard);
//     } else {
//       await subscribe(ctx);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });


module.exports = in_via;