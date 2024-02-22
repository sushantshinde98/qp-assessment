const express = require("express");
const user = express.Router();

//controller
const userController = require("../controllers/userController");

user.get("/grocery", (req, res) => {
  userController.getAvailableGroceries(req, res);
});

user.post("/grocery/book", (req, res) => {
  userController.bookGroceries(req, res);
});

module.exports = user;
