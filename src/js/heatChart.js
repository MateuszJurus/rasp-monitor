import getLogData from "./helpers/getLogData.js";

//Chart config
const config = {
    refreshRate: 5000,
    dots: {
        width: 8,
        height: 8,
    }
}

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
        let x = (100/n)+0.5;
        point.style.left = x*i + "%";
        //Assuming temperature ranges to be ~46' this will make temp differences more readable
        point.style.bottom = y*100-4600 + "px";
        this.elem.appendChild(point);
    }

    connectTheDots() {
        const dots = document.querySelectorAll('.chartPoint');
        for(let i = 0; i < dots.length; i++) {
            if(dots[i+1]) {
                //Get coordinates of current dot and the next
                const dotX = dots[i].getBoundingClientRect().left;
                const dotY = dots[i].getBoundingClientRect().bottom;
                const dotXX = dots[i+1].getBoundingClientRect().left-8;
                const dotYY = dots[i+1].getBoundingClientRect().bottom;
                //create line to connect them
                const line = document.createElement('span');
                line.classList.add('chartLine');
                line.style.left = config.dots.width+dots[i].offsetWidth/2 + "px";
                line.style.width = Math.sqrt((dotXX-dotX)*(dotXX-dotX)+(dotYY-dotY)*(dotYY-dotY)) + "px";
                //Get the angle between the dots
                const dY = dotYY - dotY;
                const dX = dotXX - dotX;
                const angle = Math.atan2(dY,dX)*180/Math.PI;
                line.style.transform = "rotate(" + angle + "deg)";
                dots[i].appendChild(line);
            }
        }
    }

    clearChart() {
        this.elem.innerHTML = '';
    }
}

const renderChart = () => {
    getLogData().then(data => {
        heatChart = new Chart(data,chart);
        heatChart.clearChart();
        for(let i = 0; i < Object.keys(data).length; i++) {
            heatChart.createChartPoint(data[i],Object.keys(data).length, i);
        }
        heatChart.connectTheDots();
    })
}

renderChart();
setInterval(renderChart, config.refreshRate);
