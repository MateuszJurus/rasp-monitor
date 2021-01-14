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
        let x = (100/n)+0.5;
        point.style.left = x*i + "%";
        //Assuming temperature ranges to be ~46' this will make temp differences more readable
        point.style.bottom = y*100-4600 + "px";
        this.elem.appendChild(point);
    }

    connectTheDots() {
        const dots = document.querySelectorAll('.chartPoint');
        //For each dot, get its coordinates, create and append line connecting with next dot
        for(let i = 0; i < dots.length; i++) {
            if(dots[i+1]) {
                const dotX = dots[i].getBoundingClientRect().left;
                const dotY = dots[i].getBoundingClientRect().bottom;
                const dotXX = dots[i+1].getBoundingClientRect().left;
                const dotYY = dots[i+1].getBoundingClientRect().bottom;
                console.log(dotYY)
                const line = document.createElement('span');
                line.classList.add('chartLine');
                line.style.left = 0+dots[i].offsetWidth/2 + "px";
                line.style.width = Math.sqrt((dotXX-dotX)*(dotXX-dotX)+(dotYY-dotY)*(dotYY-dotY)) + "px";
                //line.style.bottom = 0 + "px";
                dots[i].appendChild(line);
            }
        }
    }
}

getLogData().then(data => {
    heatChart = new Chart(data,chart);
    for(let i = 0; i < Object.keys(data).length; i++) {
        heatChart.createChartPoint(data[i],Object.keys(data).length, i);
    }
    heatChart.connectTheDots();
})

