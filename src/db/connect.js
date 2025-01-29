const Sequelize = require("sequelize");

// подключение sequelize к БД
const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_LOGIN}`,
  `${process.env.DB_PASSWORD}`,
  {
    dialect: "mysql",
    //host: "127.0.0.1",
    host: `${process.env.DB_IP}`,
    port: `${process.env.DB_PORT}`,
    logging: false,
  }
);

// импортируем модель Cars и передаем подключение sequelize
const user = require("./userModel")(sequelize);

module.exports = {
  sequelize: sequelize,
  user: user,
};
