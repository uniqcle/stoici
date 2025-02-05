const Sequelize = require("sequelize");

// созданная модель
module.exports = function (sequelize) {
  return sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      is_bot: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      language_code: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      is_premium: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      /*******************************************************/
      //custom
      /*******************************************************/
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      // дата платежа
      paid_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      sum: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },

      // id чата
      param_chat_id: {
        type: Sequelize.INTEGER, //648996345
        allowNull: false,
      },
      // тариф
      param_pretium: {
        type: Sequelize.STRING(30),
        allowNull: null,
      },
      // срок оплаты
      expire_payment_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      // телефон клиента
      customer_phone: {
        type: Sequelize.STRING(30),
        allowNull: null,
      },
      // почта клиента
      customer_email: {
        type: Sequelize.STRING(30),
        allowNull: null,
      },
      // доп. информация
      customer_extra: {
        type: Sequelize.STRING(30),
        allowNull: null,
      },
      // доп. информация
      payment_type: {
        type: Sequelize.STRING(150),
        allowNull: null,
      },
      // платежка
      provider_payment_id: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      // номер заказа интернет магазина
      param_order_num: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      // статус оплаты
      payment_status: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      // статус оплаты
      payment_status_description: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      tableName: "user",
    }
  );
};

