const { getOneUser } = require("../classes/User");
const { sendPayment } = require("../classes/Prodamus");

module.exports = {
  test: async (ctx) => {
    console.log("----------------------------- end ---------------------");
    console.log(ctx.update.message.from);

    const chat_id = ctx.update.message.chat.id;

    const prodamus = "prodamus callback!!!";
    await fetch(
      `https://api.telegram.org/bot${process.env.BOT_API_KEY}/sendMessage?chat_id=${chat_id}&text=${prodamus}`
    );
  },

  pay_test: async (ctx) => {
    try {
      console.log("pay test pass...");
      console.log(ctx.update.message);

      // console.log('--------------------------');
      // console.log("update");
      // console.log("--------------------------");
      // console.log(ctx.update);

      // console.log("--------------------------");
      // console.log("update.message");
      // console.log("--------------------------");
      // console.log(ctx.update.message);

      // console.log("--------------------------");
      // console.log("update.message.chat");
      // console.log("--------------------------");
      // console.log(ctx.update.message.chat);

      // console.log("--------------------------");
      // console.log("update.message.chat.id");
      // console.log("--------------------------");
      // console.log(ctx.update.message.chat.id)

      // await bot.sendMessage(
      //   ctx.update.message.chat.id,
      //   ctx.update.message.chat.text
      // );

      // await bot.sendInvoice(ctx.message.chat.id, 'Купить Файл', 'Покупка файла', 'file', process.env.BOT_API_KEY, 'RUB', [{ label: 'Файл', amount: 20000 }]);

      const chatId = ctx.msg.chat.id;

      console.log(chatId);

      // const response = await fetch(
      //   `https://api.telegram.org/${process.env.BOT_APY_KEY}/sendMessage`,
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       chat_id: ctx.update.message.chat.id,
      //       text: "Проверка связи!",
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      ctx.api.sendMessage(chatId, "Тест пройдет на оплату");
      console.log(ctx.config.botDeveloper);
    } catch (e) {
      console.log(e);
    }
  },

  ////////////////////////////////////////////////
  // pay2
  ///////////////////////////////////////////////
  // 401643678:TEST:6b6dea52-5e21-4cd8-90ee-ec66dabacaac

  pay2_test: async (ctx) => {
    const chatId = ctx.msg.chat.id;

    console.log("Номер чата: ", chatId);

    return ctx.replyWithInvoice(
      "Test Product", // Product title
      "Test description", // Product description
      "{}", // Product payload, not required for now
      "XTR", // Stars Currency
      [
        { amount: 1, label: "Test Product" }, // Product variants
      ]
    );

    // await ctx.api.sendInvoice(
    //   chatId,
    //   "Подписка",
    //   "Доступ к боту на 1 месяц за 299 руб.",
    //   "payload",
    //   "401643678:TEST:6b6dea52-5e21-4cd8-90ee-ec66dabacaac",
    //   "RUB",
    //   [
    //     {
    //       label: "audio_a4",
    //       amount: 29900,
    //     },
    //   ]
    // );
  },

  user: async (ctx) => {
    console.log(ctx.user);
  },
};
