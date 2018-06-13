import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrandExchangeService } from '../../../services/grand-exchange.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-three-month-chart',
  templateUrl: './three-month-chart.component.html',
  styleUrls: ['./three-month-chart.component.css']
})
export class ThreeMonthChartComponent implements OnInit {
  chart: any;
  constructor(private activatedRoute: ActivatedRoute, private grandExchangeService: GrandExchangeService) { }

  ngOnInit() {
 const allData = this.grandExchangeService.getGraphData();
 //gets all the data from the shared service
 const dailyTime180 = allData.dt;
 const averageTime180 = allData.at;
 const dailyPrice = allData.dp;
 const averagePrice = allData.ap;

//dt + at stands for dailyTime and averageTime
// dp + ap stands for dailyPrice and averagePrice
 const dt = [];
 const dp = [];
 const at = [];
 const ap = [];
for(let x = 179; x >= 90; x--) { 
  dt.push(dailyTime180[x]);
  dp.push(dailyPrice[x]);
  at.push(averageTime180[x]);
  ap.push(averagePrice[x]);
  } 
  

//   //reversing the array for the chart
 var reversedDt = dt.reverse();
 var reversedAt = at.reverse();
 var reversedDp = dp.reverse();
 var reversedAp = ap.reverse();

 //chart

 function getColor() {
	return '#32CD32'
  }

  var colorArray = [];
for (var z= 0; z <= 90; z++) {
  colorArray.push(getColor());
  }

 this.chart = new Chart(("bar-chart"), {
  type: 'bar',
  data: {
    labels: reversedDt ,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: colorArray,
        data: reversedDp,
      }
    ]
  },
  options: {
    legend: { display: false },
    scales:
    {
        xAxes: [{
            display: false
        }]
    }
    
  }
});




   
}
}
