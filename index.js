const fs = require('fs');
const path = require('path');

const os = process.platform;

const scriptsPath = path.join(__dirname, 'scripts', );
const logsPath = path.join(__dirname, 'logs');
const tempLogs = path.join(scriptsPath, 'tempcheck.sh');

console.log(tempDir)

fs.readFile('./file', 'utf8', (err,data) => {
    if(err) {
        return console.log(err);
    }
    console.log(data)
})