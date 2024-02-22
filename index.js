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
// db.sequelize
//   .authenticate()
//   .then((res) => {
//     logger.info("Sequelize authenticated! :", res);
//     db.sequelize
//       .query(`CREATE DATABASE IF NOT EXISTS ${config.database.dbname} `)
//       .then((res) => {
//         logger.info("Sequelize db query :", res);
//         db.sequelize.query(`USE ${config.database.dbname} `).then((res) => {
//           logger.info("Sequelize db query :", res);
//           db.sequelize
//             .sync()
//             .then(() => {
//               logger.info("Drop and re-sync db.");
//               db.sequelize
//                 .query(
//                   `INSERT INTO USERS (username,password,role,createdAt,updatedAt) VALUES ('sush98','123','user',now(),now()),('sss','1234','admin',now(),now())`
//                 )
//                 .then((res) => {
//                   logger.info("INSERT REC!.");
//                 })
//                 .catch((err) => {
//                   logger.error("INSERT REC ERR!." + err);
//                 });
//             })
//             .catch((err) => {
//               logger.error("sequelize snc error: ", err);
//             });
//         });
//       });
//   })
//   .catch((err) => {
//     logger.error("Sequelize authenticate error :", err);
//   });

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
