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
 const reversedDt = dt.reverse();
 const reversedAt = at.reverse();
 const reversedDp = dp.reverse();
 const reversedAp = ap.reverse();

 //chart

 this.chart = new Chart('myChart', {
  type: 'line',
  data: {
      labels: reversedDt,
      datasets: [{
              data: reversedDp,
              borderColor: '#00CED1',
              fill: false,
          },
          {
              data: reversedAp,
              borderColor: '#FFFF00',
              fill: false,
          },
      ]
  },
  options: {
      legend: {
          display: false
      },
      scales: {
          xAxes: [{
              // display: this.desktopDisplay
              display: false
              
          }],
          yAxes: [{
              display: true
          }]
      }
  }
})
         





   
}
}
