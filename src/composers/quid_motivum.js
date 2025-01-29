const { Composer } = require("grammy");
const { replyText, replyPhoto, replyAudio } = require("../classes/Reply");
const { is_paid } = require("../classes/User");
const { subscribe } = require("../classes/Subscription");

const {   virtusKeyBoard, // virtus	 4 главных добродетели.
  dichotomiaKeyBoard, // dichotomia	Дихотомия контроля.
  processusKeyBoard, // processus	Фокусируйся на процессе
  acceptatioKeyBoard, // acceptatio	Стоическое принятие
  praeferreKeyBoard, // praeferre	О хорошем, плохом и нейтральном.
  theatrumKeyBoard, // theatrum	Жизнь - это твоя игра
  responsalitasKeyBoard, // responsalitas 	Принцип ответственности
  delectusKeyBoard, // delectus	Свобода выбора
  ratioKeyBoard, // ratio	Работа нашего разума
  societasKeyBoard, // societas	Действуй на общее благо
	logosKeyBoard, // societas	Действуй на общее благо
} = require("../keyboards/quid_motivum");

const quid_motivum = new Composer();

/*********************************************************/
// virtus		4 главных добродетели.
/*********************************************************/
quid_motivum.callbackQuery("virtus", async (ctx) => {
  try {
    await replyPhoto(ctx, "virtus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "virtus");
      await replyText(ctx, "virtus", virtusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("virtus", async (ctx) => {
  try {
    await replyPhoto(ctx, "virtus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "virtus");
      await replyText(ctx, "virtus", virtusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

 
/*********************************************************/
// dichotomia	Дихотомия контроля.
/*********************************************************/
quid_motivum.callbackQuery("dichotomia", async (ctx) => {
  try {
    await replyPhoto(ctx, "dichotomia");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "dichotomia");
      await replyText(ctx, "dichotomia", dichotomiaKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("dichotomia", async (ctx) => {
  try {
    await replyPhoto(ctx, "dichotomia");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "dichotomia");
      await replyText(ctx, "dichotomia", dichotomiaKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// processus	Фокусируйся на процессе
/*********************************************************/
quid_motivum.callbackQuery("processus", async (ctx) => {
  try {
    await replyPhoto(ctx, "processus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "processus");
      await replyText(ctx, "processus", processusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("processus", async (ctx) => {
  try {
    await replyPhoto(ctx, "processus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "processus");
      await replyText(ctx, "processus", processusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// acceptatio	Стоическое принятие
/*********************************************************/
quid_motivum.callbackQuery("acceptatio", async (ctx) => {
  try {
    await replyPhoto(ctx, "acceptatio");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "acceptatio");
      await replyText(ctx, "acceptatio", acceptatioKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("acceptatio", async (ctx) => {
  try {
    await replyPhoto(ctx, "acceptatio");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "acceptatio");
      await replyText(ctx, "acceptatio", acceptatioKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// praeferre	О хорошем, плохом и нейтральном.
/*********************************************************/
quid_motivum.callbackQuery("praeferre", async (ctx) => {
  try {
    await replyPhoto(ctx, "praeferre");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "praeferre");
      await replyText(ctx, "praeferre", praeferreKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("praeferre", async (ctx) => {
  try {
    await replyPhoto(ctx, "praeferre");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "praeferre");
      await replyText(ctx, "praeferre", praeferreKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});

/*********************************************************/
// theatrum	Жизнь - это твоя игра 
/*********************************************************/
quid_motivum.callbackQuery("theatrum", async (ctx) => {
  try {
    await replyPhoto(ctx, "theatrum");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "theatrum");
      await replyText(ctx, "theatrum", theatrumKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("theatrum", async (ctx) => {
  try {
    await replyPhoto(ctx, "theatrum");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "theatrum");
      await replyText(ctx, "theatrum", theatrumKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// responsalitas 	Принцип ответственности
/*********************************************************/
quid_motivum.callbackQuery("responsalitas", async (ctx) => {
  try {
    await replyPhoto(ctx, "responsalitas");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "responsalitas");
      await replyText(ctx, "responsalitas", responsalitasKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("responsalitas", async (ctx) => {
  try {
    await replyPhoto(ctx, "responsalitas");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "responsalitas");
      await replyText(ctx, "responsalitas", responsalitasKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// delectus	Свобода выбора
/*********************************************************/
quid_motivum.callbackQuery("delectus", async (ctx) => {
  try {
    await replyPhoto(ctx, "delectus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "delectus");
      await replyText(ctx, "delectus", delectusKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("delectus", async (ctx) => {
  try {
    await replyPhoto(ctx, "delectus");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "delectus");
      await replyText(ctx, "delectus", delectusKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// ratio	 Работа нашего разума
/*********************************************************/
quid_motivum.callbackQuery("ratio", async (ctx) => {
  try {
    await replyPhoto(ctx, "ratio");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "ratio");
      await replyText(ctx, "ratio", ratioKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("ratio", async (ctx) => {
  try {
    await replyPhoto(ctx, "ratio");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "ratio");
      await replyText(ctx, "ratio", ratioKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


/*********************************************************/
// societas	Действуй на общее благо 
/*********************************************************/
// quid_motivum.callbackQuery("societas", async (ctx) => {
//   try {
//     await replyPhoto(ctx, "societas");

//     if (is_paid(ctx)) {
//       await replyAudio(ctx, "societas");
//       await replyText(ctx, "societas", societasKeyBoard);
//     } else {
//       await subscribe(ctx);
//     }

//     await ctx.answerCallbackQuery();
//   } catch (e) {
//     console.log(e);
//   }
// });

// quid_motivum.command("societas", async (ctx) => {
//   try {
//     await replyPhoto(ctx, "societas");

//     if (is_paid(ctx)) {
//       await replyAudio(ctx, "societas");
//       await replyText(ctx, "societas", societasKeyBoard);
//     } else {
//       await subscribe(ctx);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });


/*********************************************************/
// logos    Концепция логоса
/*********************************************************/
quid_motivum.callbackQuery("logos", async (ctx) => {
  try {
    await replyPhoto(ctx, "logos");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "logos");
      await replyText(ctx, "logos", logosKeyBoard);
    } else {
      await subscribe(ctx);
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

quid_motivum.command("logos", async (ctx) => {
  try {
    await replyPhoto(ctx, "logos");

    if (is_paid(ctx)) {
      await replyAudio(ctx, "logos");
      await replyText(ctx, "logos", logosKeyBoard);
    } else {
      await subscribe(ctx);
    }
  } catch (e) {
    console.log(e);
  }
});


module.exports = quid_motivum;
