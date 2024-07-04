import winston from "winston"
import "winston-daily-rotate-file"

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.simple(), // info: GUAN    json() {"level": "info", message: "GUAN"}
  transports: [
    new winston.transports.Console(),
    // new winston.transports.DailyRotateFile({
    //   level: "info",
    //   dirname: "log2",
    //   filename: "test-%DATE%.log",
    //   datePattern: "YYYY-MM-DD-HH-mm",
    //   maxsize: 1024
    // })

    new winston.transports.Http({
      host: "localhost",
      port: "3000",
      path: "/log"
    })
  ],
  // 未捕获的异常
  exceptionHandlers: [
    new winston.transports.File({
      filename: "error.log"
    })
  ],
  // Promise未捕获的异常
  rejectionHandlers: [
    new winston.transports.File({
      filename: "promise-error.log"
    })
  ]
})

// 多实例比如想要有些console有些写入文件就需要使用到
// winston.loggers.add('console', {
//   format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.simple()
//   ),
//   transports: [
//       new winston.transports.Console()
//   ]
// });
// winston.loggers.add('file', {
//   format:winston.format.combine(
//       winston.format.timestamp(),
//       winston.format.json()
//   ),
//   transports: [
//       new winston.transports.File({
//           dirname: 'log4',
//           filename: 'test.log',
//           format: winston.format.json()
//       })
//   ]
// });
// const logger1 = winston.loggers.get('console')
// const logger2 = winston.loggers.get('file')

// throw new Error("xxx")

;(async function () {
  throw Error("yyy")
})()

logger.info("GUAN")
logger.error("GUAN error")
logger.debug(6666666666)
