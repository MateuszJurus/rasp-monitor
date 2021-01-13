import getLogData from "./helpers/getLogData.js";

const chart = document.querySelector('.heat-chart-wrapper');
let heatChart;

class Chart {
    constructor(data,elem) {
        this.data = data;
        this.elem = elem;
    }

    //Parse temperature format into readable value [expected ex. 10,5'] 
    tempIntoValue(temp) {
        return temp.slice(0,-1);
    }

    //Create a point which will be displayed on the chart
    createChartPoint(values, n, i) {
        const point = document.createElement('span');
        const y = this.tempIntoValue(values[1]);
        point.setAttribute('data-before', y);
        point.classList.add('chartPoint');
        //calculate how far apart points should be
        let x = (this.elem.offsetWidth / (n-1))-2;
        point.style.left = x*i + "px";
        //Assuming temperature ranges to be ~46' this will make temp differences more readable
        point.style.bottom = y*100-4600 + "px";
        this.elem.appendChild(point);
    }
}

getLogData().then(data => {
    heatChart = new Chart(data,chart);
    for(let i = 0; i < Object.keys(data).length; i++) {
        heatChart.createChartPoint(data[i],Object.keys(data).length, i);
    }
})

