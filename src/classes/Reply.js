const { InputFile, session } = require("grammy");
const fs = require("fs/promises");

// раздел основы
const replyWithPhoto = async (ctx, command, keyboard) => {
  try {
    const text = await fs.readFile(`./txt/reply_with_photo/${command}.txt`, {
      encoding: "utf8",
    });

    await ctx.replyWithPhoto(new InputFile(`images/${command}.png`), {
      caption: text,
      reply_markup: keyboard(),
      parse_mode: "HTML",
      protect_content: true,
    });
  } catch (e) {
    console.log(e);
  }
};

// для статей fundamentum
const replyText = async (ctx, command, keyboard) => {
  try {
    const textFile = await fs.readFile(`./txt/content/${command}.txt`, {
      encoding: "utf8",
    });

    await ctx.reply(textFile, {
      reply_markup: keyboard(),
      protect_content: true,
      parse_mode: "HTML",
    });
  } catch (e) {
    console.log(e);
  }
};

const replyPhoto = async (ctx, command) => {
  try {
    await ctx.replyWithPhoto(new InputFile(`images/${command}.png`), {
      parse_mode: "HTML",
      protect_content: true,
    });
  } catch (e) {
    console.log(e);
  }
};

const replyAudio = async (ctx, command) => {
  try {
    let replyDownloading = await ctx.reply("Загрузка...");

    await ctx.replyWithAudio(new InputFile(`audio/${command}.mp3`), {
      parse_mode: "HTML",
      protect_content: true,
    });

    await ctx.api.deleteMessage(
      replyDownloading.chat.id,
      replyDownloading.message_id
    );
  } catch (e) {
    console.log(e);
  }
};

// раздел Максимы
const replyWithPhotoMaximes = async (ctx, command) => {
  try {
    await ctx.replyWithPhoto(new InputFile(`images/${command}.png`), {
      parse_mode: "HTML",
      protect_content: true,
    });
  } catch (e) {
    console.log(e);
  }
};

// раздел максимы
const replyWithText = async (ctx, command, keyboard) => {
  try {
    const textFile = await fs.readFile(`./txt/content/${command}.txt`, {
      encoding: "utf8",
    });

    await ctx.reply(textFile, {
      reply_markup: keyboard(),
      protect_content: true,
      parse_mode: "HTML",
    });
  } catch (e) {
    console.log(e);
  }
};

// страницы Максимы
const replyEditMessage = async (ctx, command, keyboard) => {
  try {
    const textFile = await fs.readFile(`./txt/content/${command}.txt`, {
      encoding: "utf8",
    });

    await ctx.api.editMessageText(
      ctx.chat.id,
      ctx.update.callback_query.message.message_id,
      textFile,
      {
        reply_markup: keyboard(),
        parse_mode: "HTML",
      }
    );

 
  } catch (e) {
    console.log(e);
  }
};

// ответ клиенту после успешной оплаты
const replyTelegramAfterPayment = async () => {

      await fetch(
        `https://api.telegram.org/bot${process.env.BOT_API_KEY}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: data.chat_id,
            text: "Поздравляем! Оплата прошла успешно. Можете начинать путешествие в античный мир!",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Начать",
                    callback_data: "start",
                  },
                ],
              ],
            },
            resize_keyboard: true,
          }),
        }
      )
        .then((response) => response.json())
        .then(async (data) => {
          await res.sendStatus(200);
          //console.log("Ответ Telegram:", data);
        })
        .catch((error) => console.error("Ошибка:", error));
}

module.exports = {
  replyWithPhoto,
  replyWithPhotoMaximes,
replyTelegramAfterPayment,
  replyWithText,
  replyEditMessage,
  replyText,
  replyPhoto,
  replyAudio,
};
