const { Composer } = require("grammy");
const fs = require("fs/promises");
const { replyWithPhoto } = require("../classes/Reply");
const {
  subscriptionKeyBoard,
  payKeyBoard,
  errorPayKeyBoard,
} = require("../keyboards/subscription");
const { sendPayment } = require("../classes/Prodamus");

const subscription = new Composer();

/*******************************************************/
// Subscription Page
/*******************************************************/
subscription.command("subscription", async (ctx) => {
  try {
    //await subscribe(ctx);
    const currentDate = new Date();
    const expirePaymentDateFormat = new Date(
      ctx.user.expire_payment_date
    ).toLocaleDateString("ru-RU");

    //console.log(ctx.user.expire_payment_date);

    if (currentDate > ctx.user.expire_payment_date) {
      await replyWithPhoto(ctx, "subsciption", subscriptionKeyBoard);
    } else {
      await ctx.reply(
        "Уважаемый искатель мудрости, подписка оплачена до " +
          expirePaymentDateFormat,
        {
          reply_markup: errorPayKeyBoard(),
        }
      );
    }
  } catch (e) {
    console.log(e);
  }
});

subscription.callbackQuery("subscription", async (ctx) => {
  try {
    //await subscribe(ctx);
    const currentDate = new Date();
    const expirePaymentDateFormat = new Date(
      ctx.user.expire_payment_date
    ).toLocaleDateString("ru-RU");

    //console.log(ctx.user.expire_payment_date);

    if (currentDate > ctx.user.expire_payment_date) {
      await replyWithPhoto(ctx, "subsciption", subscriptionKeyBoard);
    } else {
      await ctx.reply(
        "Уважаемый искатель мудрости, подписка оплачена до " +
          expirePaymentDateFormat,
        {
          reply_markup: errorPayKeyBoard(),
        }
      );
    }

    ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*******************************************************/
// Pretium I
/*******************************************************/

subscription.callbackQuery("pretium_i", async (ctx) => {
  try {
    const textFile = await fs.readFile(`./txt/content/pretium_i.txt`, {
      encoding: "utf8",
    });

    // возврат ссылки от Prodamus
    const prodamusPayLink = await sendPayment("pretium_i", ctx);

    if (typeof prodamusPayLink != "string") {
      await ctx.reply("К сожалению, ссылка на оплату не была сформирована.", {
        reply_markup: errorPayKeyBoard(),
      });
    } else {
      // если ссылка получена - отдаем клиенту
      await ctx.reply(textFile, {
        reply_markup: payKeyBoard(prodamusPayLink),
        protect_content: true,
        parse_mode: "HTML",
      });
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

/*******************************************************/
// Pretium II
/*******************************************************/
subscription.callbackQuery("pretium_ii", async (ctx) => {
  try {
    const textFile = await fs.readFile(`./txt/content/pretium_ii.txt`, {
      encoding: "utf8",
    });

    // возврат ссылки от Prodamus
    const prodamusPayLink = await sendPayment("pretium_ii", ctx);

    if (typeof prodamusPayLink != "string") {
      await ctx.reply("К сожалению, ссылка на оплату не была сформирована.", {
        reply_markup: errorPayKeyBoard(),
      });
    } else {
      // если ссылка получена - отдаем клиенту
      await ctx.reply(textFile, {
        reply_markup: payKeyBoard(prodamusPayLink),
        protect_content: true,
        parse_mode: "HTML",
      });
    }

    await ctx.answerCallbackQuery();
  } catch (e) {
    console.log(e);
  }
});

module.exports = subscription;
