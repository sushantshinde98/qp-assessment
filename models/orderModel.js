const { generateOrderID } = require("../utils/index");
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    order_id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    order_date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    grocery_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    grocery_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    order_status: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
    total_amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    remark: {
      type: Sequelize.STRING,
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  });

  return Order;
};
