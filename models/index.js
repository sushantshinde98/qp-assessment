const config = require("../config/config.json");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.database.dbname,
  config.database.username,
  config.database.password,
  {
    dialect: config.database.dialect,
    host: config.database.host,
    port: config.database.port,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./userModel")(sequelize, Sequelize);
db.Grocery = require("./groceryModel")(sequelize, Sequelize);
db.Order = require("./orderModel")(sequelize, Sequelize);

module.exports = db;
