const response = require("./response");
const { logger } = require("./logger");
const validatorCheck = require("./validatorCheck");
const crypto = require("crypto");

const hashPassword = (password) => {
  const hash = crypto.createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
};

const generateOrderID = (len, arr) => {
  let ans = "";
  for (let i = len; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans.toLocaleUpperCase();
};

module.exports = {
  logger,
  sendRes: response.sendResponse,
  validatorCheck: validatorCheck,
  hashPassword: hashPassword,
  generateOrderID: generateOrderID,
};
