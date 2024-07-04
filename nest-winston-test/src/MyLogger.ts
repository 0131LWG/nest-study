import { LoggerService } from '@nestjs/common';
import { createLogger, Logger } from 'winston';
// import { createLogger, format, Logger, transports } from 'winston';
// import * as chalk from 'chalk';
// import * as dayjs from 'dayjs';

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor(options) {
    this.logger = createLogger(options);
    // this.logger = createLogger({
    //   level: 'debug',
    //   transports: [
    //     new transports.Console({
    //       format: format.combine(
    //         format.colorize(),
    //         format.printf(({ context, level, message, time }) => {
    //           const appStr = chalk.green(`[NEST]`);
    //           const contextStr = chalk.yellow(`[${context}]`);

    //           return `${appStr} ${dayjs(time).format('YYYY-MM-DD HH:mm:ss')} ${level} ${contextStr} ${message}`;
    //         }),
    //       ),
    //     }),

    //     new transports.File({
    //       format: format.combine(format.timestamp(), format.json()),
    //       filename: '111.log',
    //       dirname: 'log',
    //     }),
    //   ],
    // });
  }

  log(message: any, context: string) {
    this.logger.log('info', message, { context, time: Date.now() });
  }
  error(message: any, context: string) {
    this.logger.log('error', message, { context, time: Date.now() });
  }
  warn(message: any, context: string) {
    this.logger.log('warn', message, { context, time: Date.now() });
  }
}
