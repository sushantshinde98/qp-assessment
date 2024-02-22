const express = require("express");
const admin = express.Router();
const { adminAuth } = require("../middlewares/index");
const { validatorCheck, logger } = require("../utils/index");

//controller
const adminController = require("../controllers/adminController");

admin.post(
  "/grocery",
  [adminAuth, validatorCheck.admin.addGroceries],
  (req, res) => {
    adminController.addGroceries(req, res);
  }
);
admin.get(
  "/grocery",
  [adminAuth, validatorCheck.admin.getAllGroceries],
  (req, res) => {
    adminController.getAllGroceries(req, res);
  }
);
admin.get(
  "/grocery/:id",
  [adminAuth, validatorCheck.admin.getGrocery],
  (req, res) => {
    adminController.getGrocery(req, res);
  }
);
admin.put(
  "/grocery",
  [adminAuth, validatorCheck.admin.updateGrocery],
  (req, res) => {
    adminController.updateGrocery(req, res);
  }
);
admin.delete(
  "/grocery/:id",
  [adminAuth, validatorCheck.admin.removeGrocery],
  (req, res) => {
    adminController.removeGrocery(req, res);
  }
);
module.exports = admin;
