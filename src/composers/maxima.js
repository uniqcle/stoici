const { Composer } = require("grammy");
const { is_paid } = require("../classes/User");
const { subscribe } = require("../classes/Subscription");
const {
  maximaKeyBoard_i,
  maximaKeyBoard_ii,
  maximaKeyBoard_iii,
  maximaKeyBoard_iv,
  maximaKeyBoard_v,
  maximaKeyBoard_vi,
  maximaKeyBoard_vii,
  maximaKeyBoard_viii,
  maximaKeyBoard_ix,
  maximaKeyBoard_x,
  maximaKeyBoard_xi,
  maximaKeyBoard_xii,
  maximaKeyBoard_xiii,
  maximaKeyBoard_xiv,
  maximaKeyBoard_xv,
  maximaKeyBoard_xvi,
  maximaKeyBoard_xvii,
  maximaKeyBoard_xviii,
  maximaKeyBoard_xix,
  maximaKeyBoard_xx,
  maximaKeyBoard_xxi,
  maximaKeyBoard_xxii,
  maximaKeyBoard_xxiii,
  maximaKeyBoard_xxiv,
  maximaKeyBoard_xxv,
  maximaKeyBoard_xxvi,
  maximaKeyBoard_xxvii,
  maximaKeyBoard_xxviii,
  maximaKeyBoard_xxix,
  maximaKeyBoard_xxx,
} = require("../keyboards/maxima");
const { replyText, replyPhoto, replyAudio } = require("../classes/Reply");

const maxima = new Composer();

/*********************************************************/
// Maxima I
/*********************************************************/
maxima.command("maxima_i", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_i");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_i");
      await replyText(ctx, "maxima_i", maximaKeyBoard_i);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_i", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_i");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_i");
      await replyText(ctx, "maxima_i", maximaKeyBoard_i);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima II
/*********************************************************/
maxima.command("maxima_ii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_ii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_ii");
      await replyText(ctx, "maxima_ii", maximaKeyBoard_ii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_ii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_ii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_ii");
      await replyText(ctx, "maxima_ii", maximaKeyBoard_ii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima III
/*********************************************************/
maxima.command("maxima_iii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_iii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_iii");
      await replyText(ctx, "maxima_iii", maximaKeyBoard_iii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_iii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_iii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_iii");
      await replyText(ctx, "maxima_iii", maximaKeyBoard_iii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima IV
/*********************************************************/
maxima.command("maxima_iv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_iv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_iv");
      await replyText(ctx, "maxima_iv", maximaKeyBoard_iv);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_iv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_iv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_iv");
      await replyText(ctx, "maxima_iv", maximaKeyBoard_iv);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima V
/*********************************************************/
maxima.command("maxima_v", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_v");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_v");
      await replyText(ctx, "maxima_v", maximaKeyBoard_v);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_v", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_v");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_v");
      await replyText(ctx, "maxima_v", maximaKeyBoard_v);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima VI
/*********************************************************/
maxima.command("maxima_vi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_vi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_vi");
      await replyText(ctx, "maxima_vi", maximaKeyBoard_vi);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_vi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_vi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_vi");
      await replyText(ctx, "maxima_vi", maximaKeyBoard_vi);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima VII
/*********************************************************/
maxima.command("maxima_vii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_vii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_vii");
      await replyText(ctx, "maxima_vii", maximaKeyBoard_vii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_vii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_vii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_vii");
      await replyText(ctx, "maxima_vii", maximaKeyBoard_vii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima VIII
/*********************************************************/
maxima.command("maxima_viii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_viii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_viii");
      await replyText(ctx, "maxima_viii", maximaKeyBoard_viii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_viii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_viii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_viii");
      await replyText(ctx, "maxima_viii", maximaKeyBoard_viii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima IX
/*********************************************************/
maxima.command("maxima_ix", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_ix");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_ix");
      await replyText(ctx, "maxima_ix", maximaKeyBoard_ix);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_ix", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_ix");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_ix");
      await replyText(ctx, "maxima_ix", maximaKeyBoard_ix);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima X
/*********************************************************/
maxima.command("maxima_x", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_x");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_x");
      await replyText(ctx, "maxima_x", maximaKeyBoard_x);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_x", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_x");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_x");
      await replyText(ctx, "maxima_x", maximaKeyBoard_x);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima XI
/*********************************************************/
maxima.command("maxima_xi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xi");
      await replyText(ctx, "maxima_xi", maximaKeyBoard_xi);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xi");
      await replyText(ctx, "maxima_xi", maximaKeyBoard_xi);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima XII
/*********************************************************/
maxima.command("maxima_xii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xii");
      await replyText(ctx, "maxima_xii", maximaKeyBoard_xii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xii");
      await replyText(ctx, "maxima_xii", maximaKeyBoard_xii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XIII
/*********************************************************/
maxima.command("maxima_xiii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xiii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xiii");
      await replyText(ctx, "maxima_xiii", maximaKeyBoard_xiii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xiii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xiii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xiii");
      await replyText(ctx, "maxima_xiii", maximaKeyBoard_xiii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XIV
/*********************************************************/
maxima.command("maxima_xiv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xiv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xiv");
      await replyText(ctx, "maxima_xiv", maximaKeyBoard_xiv);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xiv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xiv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xiv");
      await replyText(ctx, "maxima_xiv", maximaKeyBoard_xiv);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XV
/*********************************************************/
maxima.command("maxima_xv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xv");
      await replyText(ctx, "maxima_xv", maximaKeyBoard_xv);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xv");
      await replyText(ctx, "maxima_xv", maximaKeyBoard_xv);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima XVI
/*********************************************************/
maxima.command("maxima_xvi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xvi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xvi");
      await replyText(ctx, "maxima_xvi", maximaKeyBoard_xvi);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xvi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xvi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xvi");
      await replyText(ctx, "maxima_xvi", maximaKeyBoard_xvi);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XVII
/*********************************************************/
maxima.command("maxima_xvii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xvii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xvii");
      await replyText(ctx, "maxima_xvii", maximaKeyBoard_xvii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xvii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xvii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xvii");
      await replyText(ctx, "maxima_xvii", maximaKeyBoard_xvii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XVIII
/*********************************************************/
maxima.command("maxima_xviii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xviii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xviii");
      await replyText(ctx, "maxima_xviii", maximaKeyBoard_xviii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xviii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xviii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xviii");
      await replyText(ctx, "maxima_xviii", maximaKeyBoard_xviii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XIX
/*********************************************************/
maxima.command("maxima_xix", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xix");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xix");
      await replyText(ctx, "maxima_xix", maximaKeyBoard_xix);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xix", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xix");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xix");
      await replyText(ctx, "maxima_xix", maximaKeyBoard_xix);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima XX
/*********************************************************/
maxima.command("maxima_xx", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xx");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xx");
      await replyText(ctx, "maxima_xx", maximaKeyBoard_xx);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xx", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xx");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xx");
      await replyText(ctx, "maxima_xx", maximaKeyBoard_xx);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXI
/*********************************************************/
maxima.command("maxima_xxi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxi");
      await replyText(ctx, "maxima_xxi", maximaKeyBoard_xxi);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxi");
      await replyText(ctx, "maxima_xxi", maximaKeyBoard_xxi);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXII
/*********************************************************/
maxima.command("maxima_xxii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxii");
      await replyText(ctx, "maxima_xxii", maximaKeyBoard_xxii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxii");
      await replyText(ctx, "maxima_xxii", maximaKeyBoard_xxii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXIII
/*********************************************************/
maxima.command("maxima_xxiii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxiii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxiii");
      await replyText(ctx, "maxima_xxiii", maximaKeyBoard_xxiii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxiii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxiii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxiii");
      await replyText(ctx, "maxima_xxiii", maximaKeyBoard_xxiii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// Maxima XXIV
/*********************************************************/
maxima.command("maxima_xxiv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxiv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxiv");
      await replyText(ctx, "maxima_xxiv", maximaKeyBoard_xxiv);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxiv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxiv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxiv");
      await replyText(ctx, "maxima_xxiv", maximaKeyBoard_xxiv);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXV
/*********************************************************/
maxima.command("maxima_xxv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxv");
      await replyText(ctx, "maxima_xxv", maximaKeyBoard_xxv);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxv", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxv");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxv");
      await replyText(ctx, "maxima_xxv", maximaKeyBoard_xxv);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXVI
/*********************************************************/
maxima.command("maxima_xxvi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxvi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxvi");
      await replyText(ctx, "maxima_xxvi", maximaKeyBoard_xxvi);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxvi", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxvi");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxvi");
      await replyText(ctx, "maxima_xxvi", maximaKeyBoard_xxvi);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXVII
/*********************************************************/
maxima.command("maxima_xxvii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxvii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxvii");
      await replyText(ctx, "maxima_xxvii", maximaKeyBoard_xxvii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxvii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxvii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxvii");
      await replyText(ctx, "maxima_xxvii", maximaKeyBoard_xxvii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXVIII
/*********************************************************/
maxima.command("maxima_xxviii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxviii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxviii");
      await replyText(ctx, "maxima_xxviii", maximaKeyBoard_xxviii);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxviii", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxviii");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxviii");
      await replyText(ctx, "maxima_xxviii", maximaKeyBoard_xxviii);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// Maxima XXIX
/*********************************************************/
maxima.command("maxima_xxix", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxix");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxix");
      await replyText(ctx, "maxima_xxix", maximaKeyBoard_xxix);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxix", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxix");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxix");
      await replyText(ctx, "maxima_xxix", maximaKeyBoard_xxix);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});



/*********************************************************/
// Maxima XXX
/*********************************************************/
maxima.command("maxima_xxx", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxx");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxx");
      await replyText(ctx, "maxima_xxx", maximaKeyBoard_xxx);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

maxima.callbackQuery("maxima_xxx", async (ctx) => {
  try {
    await replyPhoto(ctx, "maxima_xxx");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "maxima_xxx");
      await replyText(ctx, "maxima_xxx", maximaKeyBoard_xxx);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});



module.exports = maxima;
