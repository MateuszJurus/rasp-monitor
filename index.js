const path = require('path');
const parseTemperature = require('./src/helpers/parseTemperature');

const express = require("express");
const app = express();

const os = process.platform;

const scriptsPath = path.join(__dirname, 'scripts');
const logsPath = path.join(__dirname, 'logs');
const temperatureLogsPath = path.join(logsPath, 'temperature.log');

// Change temperature file into readable object



app.get('/url', (req,res,next) => {
    parseTemperature(temperatureLogsPath).then(val => {
        res.json(val);
    });
    
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});