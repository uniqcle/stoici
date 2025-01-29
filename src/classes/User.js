const db = require("../db/connect");
const Users = db.user;
 const { addMonth } = require("../helpers/date");

 /*******************************************************/
 //Middleware. Check User and return
 /*******************************************************/
 const middlewareInitUser = async (ctx, next) => {
   try {
     // callback query
     if (ctx.update.callback_query !== undefined) {
       await modifyUserContextQuery(ctx);
     }

     //command
     else if (ctx.update.message !== undefined) {
       await modifyUserContextMessage(ctx);
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
 const modifyUserContextQuery = async (ctx) => {
   try {
     //console.log(ctx.update.callback_query);

     const { id, is_bot, first_name, username, language_code, is_premium } =
       ctx.update.callback_query.from;

     if (ctx.update.callback_query.message.chat.id) {
       const chat_id = ctx.update.callback_query.message.chat.id;

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
           summa: null, //
           provider_payment_id: null, // номер платежки
           chat_id,
           pretium: null,
           expire_payment_date: null, // до какого срок оплаты
         },
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
 const modifyUserContextMessage = async (ctx) => {
   try {
     const { id, is_bot, first_name, username, language_code, is_premium } =
       ctx?.update?.message?.from;

     const chat_id = ctx.update.message.chat.id;

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
         summa: null, //
         provider_payment_id: null, // номер платежки
         chat_id,
         pretium: null,
         expire_payment_date: null, // до какого срок оплаты
       },
     });

     ctx.user = user;
   } catch (e) {
     console.log(e);
   }
 };

 /*******************************************************/
 // Modify User context. Exit bot
 /*******************************************************/
 const modifyUserContextExit = async (ctx) => {
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
   //console.log("Текущее время: ", currentDate);

   //Если текущая дата больше даты оплата, значит подписка истека
   if (currentDate > ctx.user.expire_payment_date) {
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
 const modifyDbUser = async (req) => {
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

 async function updateUserPayment(user_id, data) {
   try {
     const rawPaidDate = new Date(data.paid_date); // получаем дату оплаты

     const isoFormattedStringDate = data.paid_date.replace(" ", "T"); // '2025-01-27T08:43:50'
     const formattedCurrentDate = new Date(isoFormattedStringDate);

     const nextMonthDate = addMonth(formattedCurrentDate);

     const newData = {
       chat_id: data.chat_id,
       paid_date: formattedCurrentDate,
       summa: data.summa,
       provider_payment_id: data.provider_payment_id,
       pretium: data.pretium,
       expire_payment_date: nextMonthDate,
     };

     console.log("Данные для обновления: ", newData);

     // Обновляем данные пользователя по ID
     const [affectedCount] = await Users.update(newData, {
       where: { user_id: data.user_id },
     });

     if (affectedCount > 0) {
       console.log("Данные обновлены");
     } else {
       console.log("Пользователь не найден");
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
