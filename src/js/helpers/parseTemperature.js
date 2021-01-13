const readline = require('readline');
const fs = require('fs');

// Parse temperature log file into JSON object line by line
const parseTemperature = async filePath => {
    let logObject = new Object;
    const file = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: file,
    })
   
    let iterator = 0;
    
    for await(const line of rl) {
        // get date of measurement
        let date = line.substring(0, line.indexOf(','));
        // get temperature in celcius
        let temperature = line.substring(line.indexOf('=')+1,line.length-2);
        logObject[iterator] = [date,temperature];
        iterator++;
    }  
    return logObject;
}


module.exports = parseTemperature;