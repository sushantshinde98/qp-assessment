const resMessage = require("./resMessage");
class Response {
  constructor(req, res, customJSON, customMsgType, customMsgCode) {
    this.req = req;
    this.res = res;
    this.customJSON;
    this.customMsgType;
    this.customMsgCode;
  }

  sendResponse(req, res, customJSON, customMsgType, customMsgCode) {
    let response = {};

    if (resMessage[customMsgType] && resMessage[customMsgType][customMsgCode]) {
      response.success = resMessage[customMsgType][customMsgCode].success;
      response.statusCode = resMessage[customMsgType][customMsgCode].statusCode;
      response.messageCode =
        resMessage[customMsgType][customMsgCode].messageCode;
      response.message = resMessage[customMsgType][customMsgCode].message;
      response.data = customJSON;
    } else {
      response.success = false;
      response.statusCode = "";
      response.messageCode = "";
      response.message = "Empty Message!";
      response.data = customJSON;
    }

    res.json(response);
  }
}

module.exports = new Response();
