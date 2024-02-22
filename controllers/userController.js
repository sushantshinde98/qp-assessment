const db = require("../models/index");
const { logger, sendRes, generateOrderID } = require("../utils/index");
const { validationResult } = require("express-validator");

module.exports = {
  getAvailableGroceries: async (req, res) => {
    let currentRoute = req.headers?.host + req.originalUrl;
    let validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      logger.info(
        JSON.stringify({
          status: "401",
          result: "Validation Failed No Data",
          app: config.app.name,
          currentRoute,
          req_body: req.body,
        })
      );
      return sendRes(
        req,
        res,
        validationErrors.array(),
        "COMMON_MESSAGE",
        "VALIDATION_FAILED"
      );
    } else {
      try {
        let getRes = await db.Grocery.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt", "addedBy", "status"],
          },
          where: { status: 1 },
        });
        if (getRes) {
          sendRes(req, res, getRes, "USER", "GET_AVAILABLE_GROCERY_SUCCESS");
        } else {
          sendRes(req, res, null, "USER", "GET_AVAILABLE_GROCERY_SUCCESS");
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "getAvailableGroceries", err: err }));
        sendRes(req, res, err, "COMMON_MESSAGE", "ERROR");
      }
    }
  },
  bookGroceries: async (req, res) => {
    let currentRoute = req.headers?.host + req.originalUrl;
    let validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      logger.info(
        JSON.stringify({
          status: "401",
          result: "Validation Failed No Data",
          app: config.app.name,
          currentRoute,
          req_body: req.body,
        })
      );
      return sendRes(
        req,
        res,
        validationErrors.array(),
        "COMMON_MESSAGE",
        "VALIDATION_FAILED"
      );
    } else {
      try {
        let orders = [];
        let user_id = req.body.user_id ? req.body.user_id : "";
        let groceries = req.body.groceries ? req.body.groceries : "";
        if (user_id !== "" && groceries !== "" && groceries.length > 0) {
          for (let i = 0; i < groceries.length; i++) {
            //book order and update stock
            orders.push({
              order_id: generateOrderID(15, "12345abcde"),
              order_date: new Date(),
              user_id: user_id,
              grocery_id: groceries[i].grocery_id,
              grocery_name: groceries[i].grocery_name,
              quantity: groceries[i].quantity,
              order_status: 1,
              total_amount:
                parseFloat(groceries[i].quantity) *
                parseFloat(groceries[i].price),
              remark: "success",
              updatedAt: new Date(),
              createdAt: new Date(),
            });
          }

          let orderRes = await db.Order.bulkCreate(orders);
          if (orderRes) {
            let updateRes = "";
            for (let i = 0; i < orders.length; i++) {
              //update
              updateRes = await db.Grocery.decrement("stock", {
                by: orders[i].quantity,
                where: { grocery_id: orders[i].grocery_id },
              });
            }
            if (updateRes !== "") {
              sendRes(req, res, orderRes, "USER", "BOOK_GROCERY_SUCCESS");
            } else {
              sendRes(req, res, updateRes, "COMMON_MESSAGE", "ERROR");
            }
          } else {
            sendRes(req, res, [orderRes], "COMMON_MESSAGE", "ERROR");
          }
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "bookGroceries", err: err }));
        sendRes(req, res, err, "COMMON_MESSAGE", "ERROR");
      }
    }
  },
};
