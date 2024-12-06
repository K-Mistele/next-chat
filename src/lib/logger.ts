import winston from 'winston'
import {colorize} from 'json-colorizer'
import util from 'util'
import 'dotenv/config'

function prettyPrintArgs(args: any[]): any[] {
    if (args) {
        return args.map((arg) => {
            // Check if the arg is a complex object (not null and typeof object)
            if (arg !== null && typeof arg === 'object') {
                // Pretty print the object using JSON.stringify with indentation
                //return JSON.stringify(arg, null, 2);
                return colorize(arg)
            }
            // If not an object, return the value as-is
            return arg;
        });

    } else {
        return args;
    }
}
//From:
//https://stackoverflow.com/questions/55387738/how-to-make-winston-logging-library-work-like-console-log

function transform(info: any, opts: object) {
    const args = prettyPrintArgs(info[Symbol.for('splat')]);

    if (args) { info.message = util.format(info.message, ...args); }
    return info;
}
function utilFormatter() { return {transform}; }

// The following comes from here:
// https://github.com/winstonjs/winston/issues/1427#issuecomment-811184784)
// It's basically the same as utilFormatter()
const combineMessageAndSplat = () => {
    return {transform: (info: any, opts: object) => {
            //combine message and args if any
            info.message =  util.format(info.message, ...info[Symbol.for('splat')]  ||  [] )
            return info;
        }
    }
}

const usCentralTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    fractionalSecondDigits: 3, // This adds millisecond precision (3 digits)
    hour12: true
})

// This is a version of the Simple formatter that doesn't
// handle objects the same way.
// The OOTB simple formatter (see node_modules/logform/simple.js)
// is written to handle complex objects passed to the logger by
// stringifying anything that isn't 'level', 'message', or 'splat',
// and appending that string to the log message.
// In our case, this yields a double-printing of objects, when objects
// are passed into the log message.
// This simplified version sacrifices that functionailty that we don't
// need for a better experience in the more common use case of an object
// being passed as the argument to the log message.
const realSimple = () => {
    const shouldShowTime = process.env.DISABLE_LOG_TIME !== 'true'
    if (shouldShowTime) return{ transform: (info: any, opts: object) => {
            info[Symbol.for('message')] = `[${usCentralTime.format(new Date())}] ${info.level}: ${info.message}`;
            return info;
        }}
    else return{ transform: (info: any, opts: object) => {
            info[Symbol.for('message')] = `${info.level}: ${info.message}`;
            return info;
        }}
}

// For reference, levels are as follows:
// {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }

//Set up the logger
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.prettyPrint(),
        // @ts-expect-error it works
        utilFormatter(),
        winston.format.colorize({ all: false}),
        //winston.format.simple(),
        realSimple(),
    ),
    transports: [ new winston.transports.Console()]
});

//... and export it
export default logger;