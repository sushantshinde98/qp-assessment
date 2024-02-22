module.exports = (sequelize, Sequelize) => {
  const Grocery = sequelize.define("grocery", {
    grocery_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    grocery_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    grocery_manufacture_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    grocery_expiry_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category_name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    status: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
    addedBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  });

  return Grocery;
};
