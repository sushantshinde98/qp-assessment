const { check } = require("express-validator");

module.exports = {
  user: {
    bookGroceries: [
      check("user_id", "User ID Is Mandotary")
        .not()
        .bail()
        .isEmpty()
        .bail()
        .trim()
        .bail()
        .isLength({ min: 1 })
        .withMessage("User ID number must be at least 1 character long")
        .bail(),

      check("groceries", "Groceries Is Mandotary")
        .isArray()
        .not()
        .bail()
        .isEmpty()
        .bail()
        .trim()
        .bail()
        .withMessage("groceries  must be array")
        .bail(),
    ],
  },
  admin: {
    addGroceries: [],
    getAllGroceries: [],
    getGrocery: [],
    updateGrocery: [],
    removeGrocery: [],
  },
};
