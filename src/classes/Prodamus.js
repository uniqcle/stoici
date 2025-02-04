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
    //demo_mode: 1,
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

    const response = await fetch(currentLink, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.text();

    console.log(currentLink);
    console.log("Текущая ссылка: ", data);

    return data;
  } catch (e) {
    console.error("There was a problem with the fetch operation:", e); // Обрабатываем ошибки
  }
};

/*******************************************************/
// Отправка данных от Prodamus
/*******************************************************/
const callbackPaymentWebhook = async (req, res) => {
  try {
    const headers = req.headers;
    const body = req.body; // Данные уже распарсены
    const sign = String(req.headers.sign);

    // const data = {
    //   date: "2025-02-04T00:00:00+03:00",
    //   order_id: "1",
    //   order_num: "test",
    //   domain: "stoicismus.payform.ru",
    //   sum: "1000.00",
    //   customer_phone: "+79999999999",
    //   customer_email: "email@domain.com",
    //   customer_extra: "тест",
    //   payment_type: "Пластиковая карта Visa, MasterCard, МИР",
    //   commission: "3.5",
    //   commission_sum: "35.00",
    //   attempt: "1",
    //   sys: "test",
    //   products: [
    //     {
    //       name: "Доступ к обучающим материалам",
    //       price: "1000.00",
    //       quantity: "1",
    //       sum: "1000.00",
    //     },
    //   ],
    //   payment_status: "success",
    //   payment_status_description: "Успешная оплата",
    // };

    let newBody = [];

    function objectToArray(obj) {
      return Object.entries(obj).map(([key, value]) => {
        if (typeof value === "array" && value !== null) {
          return (newBody[key] = objectToArray(value));
        } else {
          return (newBody[key] = value);
        }
      });
    }

    objectToArray(body);

    // console.log("Массив с php: ");
    // console.log(body);

    const secret_key = `${process.env.PAYMENT_SECRET_KEY}`;
    // console.log("Headers: ", headers);
    // console.log("Received data:", data);

    if (Object.keys(body).length == 0) {
      throw new Error("POST is empty");
    }

    if (!headers.sign) {
      throw new Error("signature not found");
    }

    console.log("Заголовки запроса: ", headers);
    console.log("Знак Sign: ", sign);
    console.log("Тело запроса body: ", body);
    //console.log("Полный запрос request: ", req);

    if (!Hmac.verify(req, secret_key, sign)) {
      throw new Error("signature incorrect");
    }

    await res.sendStatus(200);
    console.log("Успешно!");
  } catch (e) {
    console.log(e);
    await res.sendStatus(400);
  }

  // if (Object.keys(data).length !== 0) {
  //   // обновляем запись в БД
  //   // если запись в БД произошла успешно, отправляем статус 200

  //   //data.paid_date

  //   const currentDate = new Date(); // Текущая дата
  //   const nextMonthDate = addMonth(currentDate);

  //   console.log("Текущая дата:", currentDate);
  //   console.log("Дата через месяц:", nextMonthDate.toLocaleDateString());

  //   await updateUserPayment(data.user_id, data);

  //   await fetch(
  //     `https://api.telegram.org/bot${process.env.BOT_API_KEY}/sendMessage`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         chat_id: data.chat_id,
  //         text: "Поздравляем! Оплата прошла успешно. Можете начинать путешествие в античный мир!",
  //         reply_markup: {
  //           inline_keyboard: [
  //             [
  //               {
  //                 text: "Начать",
  //                 callback_data: "start", // Данные для обработки
  //               },
  //             ],
  //           ],
  //         },
  //         resize_keyboard: true,
  //       }),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then(async (data) => {
  //       await res.sendStatus(200);
  //       //console.log("Ответ Telegram:", data);
  //     })
  //     .catch((error) => console.error("Ошибка:", error));

  // } else {
  //   await res.sendStatus(400);
  // }
};

module.exports = {
  sendPayment,
  callbackPaymentWebhook,
};
