const path = require('path');
const parseTemperature = require('./src/helpers/parseTemperature');

const os = process.platform;

const scriptsPath = path.join(__dirname, 'scripts');
const logsPath = path.join(__dirname, 'logs');
const temperatureLogsPath = path.join(logsPath, 'temperature.log');

// Change temperature file into readable object
parseTemperature(temperatureLogsPath).then(val => {
    //console.log(val)
});
