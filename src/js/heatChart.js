import getLogData from "./helpers/getLogData.js";

const chart = document.querySelector('.heat-chart-wrapper');
let heatChart;

class Chart {
    constructor(data,elem,dimensions=[400,400]) {
        this.data = data;
        this.elem = elem;
        this.dimensions = dimensions;
    }
    //Parse date format into readable value [expected ex. 04-01-2021 22:53:01]
    dateIntoValue() {

    }
    //Parse temperature format into readable value [expected ex. 10,5'] 
    tempIntoValue(temp) {
        console.log(temp.slice(0,-1))
        return temp.slice(0,-1);
    }

    //Create a point which will be displayed on the chart
    createChartPoint(values = [this.data[0][0],this.data[0][1]]) {
        const point = document.createElement('span');
        const y = this.tempIntoValue(this.data[0][1]);
        point.classList.add('chartPoint');
        point.style.left = "1px";
        point.style.bottom = y + "px";
        console.log(values)
        this.elem.appendChild(point)
    }
}

getLogData().then(val => {
    heatChart = new Chart(val,chart);
    heatChart.createChartPoint();
})

