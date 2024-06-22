import * as path from 'path';
import * as winston from 'winston';

const mainModule = process.mainModule ? process.mainModule : require.main;

if (!mainModule) {
  throw new Error('Cannot determine main module');
}

const label = path.basename(mainModule.filename);

const logLevel = process.env.NODE_ENV === 'production' ? 'error' : 'debug';

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.label({ label }),
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console()
  ]
});

const expressLogger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.label({ label }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/requests.log' })
  ]
});

export { logger, expressLogger };
