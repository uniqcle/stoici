const Hmac = require("../classes/Hmac");
const { updateUserPayment } = require("../classes/User");
const { addMonth } = require("../helpers/date");

const customData = {
  postUrl: `${process.env.PAYMENT_URL}`,
  descriptionPretium: `${process.env.PAYMENT_DESCRIPTION}`,
  pretium_i: {
    pricePretium: `${process.env.PRETIUM_I}`,
  },
  pretium_ii: {
    pricePretium: `${process.env.PRETIUM_II}`,
  },
};

/*******************************************************/
// Отправка данных к Prodamus для получения ссылки на оплату
/*******************************************************/
const sendPayment = async (pretium, ctx) => {
  const chat_id = ctx.update.callback_query.message.chat.id;
  const orderId = "S" + chat_id;

  let additional_data = pretium == "pretium_i" ? " на 1 месяц" : " на 3 месяца";

  // формируем объект инвойса
  const params = {
    order_id: orderId,
    customer_extra: "Доступ к платному контенту" + additional_data,
    do: "link",
    sys: `${process.env.PAYMENT_SYS_KEY}`,
    _param_chat_id: chat_id,
    _param_pretium: pretium,
    _param_orderid: orderId,
    demo_mode: 1,
    callbackType: "json",
  };

  try {
    const url = new URL(customData.postUrl); // Замените на нужный URL

    // Добавляем параметры в URL
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const currentLink =
      url.href +
      `&products[0][price]=${customData[pretium].pricePretium}&products[0][quantity]=1&products[0][name]=${customData.descriptionPretium}`;

    const response = await fetch(currentLink);
    const data = await response.text();

    // console.log(currentLink);
    // console.log("Текущая ссылка: ", data);

    return data;
  } catch (e) {
    console.error("There was a problem with the fetch operation:", e); // Обрабатываем ошибки
  }
};

/*******************************************************/
// Отправка данных от Prodamus
/*******************************************************/
const callbackPaymentWebhook = async (req, res) => {
  const data = req.body; // Данные уже распарсены

  if (Object.keys(data).length !== 0) {
    // обновляем запись в БД
    // если запись в БД произошла успешно, отправляем статус 200
    console.log("Received data:", data);

    //data.paid_date

    const currentDate = new Date(); // Текущая дата
    const nextMonthDate = addMonth(currentDate);

    console.log("Текущая дата:", currentDate);
    console.log("Дата через месяц:", nextMonthDate.toLocaleDateString());

    await updateUserPayment(data.user_id, data);

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
                  callback_data: "start", // Данные для обработки
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
  } else {
    await res.sendStatus(400);
  }
};

module.exports = {
  sendPayment,
  callbackPaymentWebhook,
};
