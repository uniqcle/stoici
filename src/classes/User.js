const db = require("../db/connect");
const Users = db.user;
 
 

/*******************************************************/
//Middleware. Check User and return
/*******************************************************/
const middlewareInitUser = async (ctx, next) => {
  try {
    // callback query
    if (ctx.update.callback_query !== undefined) {
      await initUserContextQuery(ctx);
    }

    //command
    else if (ctx.update.message !== undefined) {
      await initUserContextMessage(ctx);
    } else {
      await modifyUserContextExit(ctx);
    }

    await next();
  } catch (e) {
    console.log(e);
  }
};

/*******************************************************/
// Modify User context. Callback Query
/*******************************************************/
const initUserContextQuery = async (ctx) => {
  try {
    //console.log(ctx.update.callback_query);

    const { id, is_bot, first_name, username, language_code, is_premium } =
      ctx.update.callback_query.from;

    if (ctx.update.callback_query.message.chat.id) {
      const param_chat_id = ctx.update.callback_query.message.chat.id;

      const [user, created] = await Users.findOrCreate({
        where: { user_id: id },
        defaults: {
              user_id: id,
              is_bot,
              first_name,
              username,
              language_code,
              is_premium,
              //custom
              is_admin: null,
              paid_date: null, // дата оплаты
              sum: null, //
              provider_payment_id: null, // номер платежки
              param_chat_id: param_chat_id,
              param_pretium: null,
              expire_payment_date: null, // до какого срок оплаты
            }
      });

      ctx.user = user;
    }

    return;
  } catch (e) {
    console.log(e);
  }
};

/*******************************************************/
// Modify User context. Message
/*******************************************************/
const initUserContextMessage = async (ctx) => {
  try {
    const { id, is_bot, first_name, username, language_code, is_premium } =
      ctx?.update?.message?.from;

    const param_chat_id = ctx.update.message.chat.id;

    //console.log(chat_id);

    const [user, created] = await Users.findOrCreate({
      where: { user_id: id },
      defaults: {
            user_id: id,
            is_bot,
            first_name,
            username,
            language_code,
            is_premium,
            //custom
            is_admin: null,
            paid_date: null, // дата оплаты
            sum: null, //
            provider_payment_id: null, // номер платежки
            param_chat_id: param_chat_id,
            param_pretium: null,
            expire_payment_date: null, // до какого срок оплаты
          }
    });

    ctx.user = user;
  } catch (e) {
    console.log(e);
  }
};

 /*******************************************************/
 // Modify User context. Exit bot
 /*******************************************************/
 const initUserContextExit = async (ctx) => {
   // console.log("-------------------------------------------------");
   // console.log("exit user");
   // console.log("-------------------------------------------------");
   // console.log(ctx.update.my_chat_member.from.id);

   // const { id, is_bot, first_name, username, language_code, is_premium } =
   //   ctx?.update?.my_chat_member?.from;

   try {
     // let result = await Users.findOne({
     //   where: { user_id: id },
     //   attributes: ["id", "first_name", "username"],
     // });
     // result.set({
     //   is_active: false,
     // });
     // await result.save();
   } catch (e) {
     console.log(e);
   }
 };

 /*******************************************************/
 //Check is paid
 /*******************************************************/
 const is_paid = (ctx) => {
   const currentDate = new Date();

   //Если текущая дата больше даты оплата, значит подписка истека
   if (
     currentDate > ctx.user.expire_payment_date ||
     ctx.user.expire_payment_date == null
   ) {
     return false;
   } else {
     return true;
   }
 };

 /*******************************************************/
 //Get one user and return
 /*******************************************************/
 // const getOneUser = async (ctx) => {
 //   try {
 //     //console.log(ctx.update )

 //     const userId = ctx?.update?.callback_query?.from?.id
 //       ? ctx?.update?.callback_query?.from?.id
 //       : ctx?.update?.message?.from?.id;

 //     if (userId) {
 //       let user = await Users.findOne({
 //         where: { user_id: userId },
 //         attributes: [
 //           "id",
 //           "user_id",
 //           "is_bot",
 //           "first_name",
 //           "username",
 //           "language_code",
 //           "is_premium",
 //           "is_admin",
 //           "createdAt",
 //           "updatedAt",
 //           "paid_date",
 //           "summa",
 //           "provider_payment_id",
 //           "pretium",
 //           "chat_id",
 //           "expire_payment_date"
 //         ],
 //       });

 //       return user;
 //     }
 //   } catch (e) {
 //     console.log(e);
 //   }
 // };

 /*******************************************************/
 //
 /*******************************************************/
 const updateDBUser = async (req) => {
   try {
     let result = await Users.findOne({
       where: { user_id: userID },
       attributes: ["id", "first_name", "username"],
     });

     result.set({
       first_name: "Ada",
     });

     await result.save();
   } catch (e) {
     console.log(e);
   }
 };

 async function updateUserPayment(customBody) {
   try {
     //console.log("Данные для обновления: ", customBody);

     const preparedData = {
       paid_date: customBody.paidDate,
       customer_phone: customBody.customer_phone,
       customer_email: customBody.customer_email,
       customer_extra: customBody.customer_extra,
       payment_type: customBody.payment_type,
       sum: customBody.sum,
       expire_payment_date: customBody.expire_payment_date,
       provider_payment_id: customBody.provider_payment_id,
       param_chat_id: customBody.param_chat_id,
       param_pretium: customBody._param_pretium,
       param_order_num: customBody.order_num,
       payment_status: customBody.payment_status,
       payment_status_description: customBody.payment_status_description,
     };

     // Обновляем данные пользователя по ID
     const [affectedCount] = await Users.update(preparedData, {
       where: { user_id: customBody.user_id },
     });

     if (affectedCount > 0) {
       console.log(`Данные оплаты для пользователя ${customBody.user_id}`);
     } else {
       console.log(`Пользователь ${customBody.user_id} не найден`);
     }
   } catch (error) {
     console.error("Ошибка обновления:", error);
   }
 }

 module.exports = {
   middlewareInitUser,
   is_paid,
   updateUserPayment,
 };
