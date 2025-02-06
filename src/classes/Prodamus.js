const Hmac = require("../classes/Hmac");
const { updateUserPayment } = require("../classes/User");
const {
  addMonth,
  generateOrderNumber,
  showLocalDate,
} = require("../helpers/date");
const { replyTelegramAfterPayment } = require("../classes/Reply");

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
  const user_id = ctx.user.dataValues.user_id;
  const chat_id = ctx.update.callback_query.message.chat.id;
  const order_num = generateOrderNumber();

  console.log(ctx.user.dataValues.user_id);
  console.log("Номер заказа: ", order_num);

  let additional_customer_extra =
    pretium == "pretium_i" ? " на 1 месяц" : " на 3 месяца";

  // формируем объект инвойса
  const params = {
    order_id: order_num,
    customer_extra: "Доступ к платному контенту" + additional_customer_extra,
    do: "link",
    sys: `${process.env.PAYMENT_SYS_KEY}`,
    _param_chat_id: chat_id,
    _param_pretium: pretium,
    _param_order_num: order_num,
    _param_user_id: user_id,
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
    console.error("There was a problem with the fetch operation:", e);
  }
};

/*******************************************************/
// Отправка данных от Prodamus
/*******************************************************/
// обновляем запись в БД
// если запись в БД произошла успешно, отправляем статус 200
const callbackPaymentWebhook = async (req, res) => {
  try {
    const secret_key = `${process.env.PAYMENT_SECRET_KEY}`;
    const headers = req.headers;
    const body = req.body;
    const sign = req.headers.sign;
    const paidDate = body.date;
    let customBody = {};
    let nextMonthPayment;

    console.log("Полный вид запроса: ", req);
    console.log("Заголовки запроса: ", headers);
    console.log("Знак Sign: ", sign);
    console.log("Тело запроса body: ", body);

    if (Object.keys(body).length == 0) {
      throw new Error("POST is empty");
    }

    // if (!Hmac.verify(req, secret_key, sign)) {
    //   throw new Error("signature incorrect");
    // }

    // sign = Hmac.create(body, secret_key);
    // console.log(sign);

    //sign = "d57b4344cf3104e5221377a1e9b5ab67fbd687c8cb6dc45c0299ddfa369ed21f";

    const passedTest = Hmac.verify(body, secret_key, sign) ? "true" : "false";
    console.log("Подпись прошла: ", passedTest);



    if (!headers.sign) {
      throw new Error("signature not found");
    }

    // обработка следующей даты оплаты
    if (body._param_pretium === "pretium_i") {
      nextMonthPayment = addMonth(paidDate, 1);
    } else {
      nextMonthPayment = addMonth(paidDate, 3);
    }

    customBody = {
      ...body,
      paidDate: new Date(body.date),
      expire_payment_date: nextMonthPayment,
      user_id: Number(body._param_user_id),
      param_chat_id: Number(body._param_chat_id),
      provider_payment_id: body.order_id,
    };

    // console.log("Дата оплаты: ", paidDate);
    // console.log("Следующая дата оплаты: ", nextMonthPayment);
    // console.log("Дата через месяц:", showLocalDate(nextMonthPayment));

    await updateUserPayment(customBody);
    await replyTelegramAfterPayment(customBody);

    await res.sendStatus(200);
    //console.log("Успешно!");
  } catch (e) {
    //console.log(e);
    await res.sendStatus(400);
  }
};

module.exports = {
  sendPayment,
  callbackPaymentWebhook,
};
