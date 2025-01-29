const { subscribeKeyBoard } = require("../keyboards/subscription");

const subscribe = async (ctx) => {
  try {
    await ctx.reply("Приключения на паузе... Необходимо оформить подписку.", {
      reply_markup: subscribeKeyBoard(),
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  subscribe,
};
