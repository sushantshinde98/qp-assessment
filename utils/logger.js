const winston = require("winston");
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.json(),

    winston.format.timestamp({
      format: "YY-MM-DD HH:MM:SS",
    }),
    winston.format.colorize({
      all: true,
    }),

    winston.format.printf((info) => {
      return `{${info.level}: ${info.message} : ${info.timestamp}}`;
    })
  ),
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({ filename: "qs-logfile.log" }),
  ],
});

module.exports = { logger };
