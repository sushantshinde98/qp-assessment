const express = require("express");
const config = require("../config/config.json");
const { sendRes, logger } = require("../utils/index");

const app = express();

const baseRoute = express.Router();
const adminRoute = express.Router();
const userRoute = express.Router();

//routes declarations
const admin = require("./admin");
const user = require("./user");

//base route
baseRoute.get("/", (req, res) => {
  logger.info(`${config.app.name}, "ROOT API", ${JSON.stringify(req.body)}`);
  sendRes(req, res, null, "COMMON_MESSAGE", "WELCOME");
});

//all routes
adminRoute.use("/admin", admin);
userRoute.use("/user", user);

app.use(baseRoute);
app.use(adminRoute);
app.use(userRoute);

module.exports = app;
