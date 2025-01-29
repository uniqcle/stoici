require("dotenv").config();
const { Bot, webhookCallback , session, GrammyError, HttpError } = require("grammy");
const express = require("express");

const routes = require("./src/classes/Routes");
const { middlewareInitUser } = require("./src/classes/User");
const commands = require("./json/commands");

// test functions
//const { user, test } = require("./src/helpers/test");

//composers include
const start = require("./src/composers/start");
const fundamentum = require("./src/composers/fundamentum");
const stoicus = require("./src/composers/stoicus");
const quo_vadis = require("./src/composers/quo_vadis");
const quid_motivum = require("./src/composers/quid_motivum");
const in_via = require("./src/composers/in_via");
const stoici = require("./src/composers/stoici");
const maximes = require("./src/composers/maximes");
const maxima = require("./src/composers/maxima");
const subscription = require("./src/composers/subscription");

const bot = new Bot(process.env.BOT_API_KEY);

const WEBHOOK_URL = `${process.env.WEBHOOK_URL}/webhook`;

const app = express();

app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "templates")); //установка папки шаблона
//console.log('Текущий каталог: ', app.get("views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// menu
bot.api.setWebhook(`${WEBHOOK_URL}`);
bot.api.setMyCommands(commands);

app.post("/webhook", webhookCallback(bot, "express"));

// composers
bot.use(middlewareInitUser);
bot.use(start);
bot.use(fundamentum);
bot.use(stoicus); // Кто такой стоик?
bot.use(quo_vadis); // Куда стремится?
bot.use(quid_motivum); // Чем руководствуется?
bot.use(in_via); // С чем сталкивается на пути?
bot.use(stoici); // Знаменитые стоики
bot.use(maximes);
bot.use(maxima);
bot.use(subscription);

//session
// Установите middleware для сессии и определите начальное значение.
function initial() {
  return { currentMaximesPage: 0, payment: null };
}
bot.use(session({ initial }));

bot.command("admin", async (ctx) => {
  if (ctx.user.is_admin) {
    let count = ctx.session.currentMaximesPage;
    await ctx.reply(`Ваш уровень голода ${count}!`);

    ctx.session.currentMaximesPage = 123;
    count = ctx.session.currentMaximesPage;
    await ctx.reply(`Ваш уровень голода payment... ${count}!`);
  } else {
    await ctx.reply(`К сожалению, Вы не администратор.`);
  }
});




bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}: `);
  const e = ctx.error;

  if (e instanceof GrammyError) {
    console.log("Error in request: ", e.description);
  } else if (e instanceof HttpError) {
    console.log("Could not contact Telegram ", e);
  } else {
    console.log("Unknow error: ", e);
  }
});

app.listen(process.env.APP_PORT, async () => {
  console.log("webserver is working...");
  //await bot.api.setWebhook(`${URL}/bot${TOKEN}`);
});