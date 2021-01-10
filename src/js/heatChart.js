import getLogData from "./helpers/getLogData.js";
const { data } = getLogData;

const chart = document.querySelector('.heat-chart-wrapper');

class Chart {
    constructor(data,dimensions=[400,400]) {
        this.data = data;
        this.dimensions = dimensions;
    }


}

console.log('test');
//console.log();