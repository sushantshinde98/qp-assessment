const express = require("express");
const app = express();
const routes = require("./routes");
const { logger, generateOrderID } = require("./utils/index");
const db = require("./models/index");
const config = require("./config/config.json");
const { error } = require("winston");
app.use(express.json());
const port = process.env.PORT || 5000;

// Routes
app.use("/v1/", routes);

//sequelize
db.sequelize
  .authenticate()
  .then((res) => {
    logger.info("Sequelize authenticated! :", res);
    db.sequelize
      .sync()
      .then((res) => {
        logger.info("sequelize sync", res);
      })
      .catch((err) => {
        logger.error("sequelize sync err", err);
      });
  })
  .catch((err) => {
    logger.error("Sequelize authentication error", err);
  });

app.listen(port, () => {
  logger.info(`Grocery booking app listening on port ${port}`);
});
