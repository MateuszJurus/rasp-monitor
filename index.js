const { parse } = require('path');
const path = require('path');
const parseTemperature = require('./src/helpers/parseTemperature');

const os = process.platform;

const scriptsPath = path.join(__dirname, 'scripts');
const logsPath = path.join(__dirname, 'logs');
const tempLogs = path.join(logsPath, 'temperature.log');

parseTemperature(tempLogs);