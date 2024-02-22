const { sendRes, logger } = require("../utils/index");
module.exports = {
  adminAuth: (req, res, next) => {
    if (req.headers["role"] !== "" && req.headers["role"] === "admin") {
      next();
    } else {
      sendRes(req, res, null, "ROLE", "ADMIN_ROLE_ERROR");
    }
  },
};
