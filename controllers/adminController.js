const db = require("../models/index");
const { logger, sendRes } = require("../utils/index");
const { validationResult } = require("express-validator");

module.exports = {
  addGroceries: async (req, res) => {
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
        let body = {
          ...req.body,
        };
        let createRes = await db.Grocery.create(body);

        if (createRes) {
          sendRes(req, res, createRes, "ADMIN", "ADD_GROCERY_SUCCESS");
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "addGroceries", err: err }));
        sendRes(req, res, JSON.stringify(err), "COMMON_MESSAGE", "ERROR");
      }
    }
  },
  getAllGroceries: async (req, res) => {
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
        let getRes = await db.Grocery.findAll();
        if (getRes) {
          sendRes(req, res, getRes, "ADMIN", "GET_GROCERY_SUCCESS");
        } else {
          sendRes(req, res, null, "ADMIN", "GET_GROCERY_SUCCESS");
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "getAllGroceries", err: err }));
        sendRes(req, res, err, "COMMON_MESSAGE", "ERROR");
      }
    }
  },
  getGrocery: async (req, res) => {
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
        let id = req.params.id;
        let getRes = await db.Grocery.findByPk(id);
        if (getRes) {
          sendRes(req, res, getRes, "ADMIN", "GET_GROCERY_SUCCESS");
        } else {
          sendRes(req, res, null, "ADMIN", "GET_GROCERY_SUCCESS");
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "getGrocery", err: err }));
        sendRes(req, res, err, "COMMON_MESSAGE", "ERROR");
      }
    }
  },
  updateGrocery: async (req, res) => {
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
        let body = { ...req.body };
        let updateRes = await db.Grocery.update(body, {
          where: { grocery_id: body.grocery_id },
        });
        if (updateRes) {
          sendRes(req, res, updateRes, "ADMIN", "UPDATE_GROCERY_SUCCESS");
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "updateGrocery", err: err }));
        sendRes(req, res, err, "COMMON_MESSAGE", "ERROR");
      }
    }
  },
  removeGrocery: async (req, res) => {
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
        let id = req.params.id;
        let delRes = await db.Grocery.destroy({
          where: { grocery_id: id },
        });
        if (delRes) {
          sendRes(req, res, delRes, "ADMIN", "REMOVE_GROCERY_SUCCESS");
        }
      } catch (err) {
        logger.info(JSON.stringify({ api: "removeGrocery", err: err }));
        sendRes(req, res, err, "COMMON_MESSAGE", "ERROR");
      }
    }
  },
};
