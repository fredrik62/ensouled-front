import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrandExchangeService } from '../../../services/grand-exchange.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-one-month-chart',
  templateUrl: './one-month-chart.component.html',
  styleUrls: ['./one-month-chart.component.css']
})
export class OneMonthChartComponent implements OnInit {
chart: any;
data: any;

  constructor(private activatedRoute: ActivatedRoute, private grandExchangeService: GrandExchangeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
        this.grandExchangeService.getOneItem(id)
         .toPromise()
           .then((res) => {
            this.data = res;
            const x = this.data;
            const dailyTime180 = [];
            const dailyPrice = [];
            const averageTime180 = [];
            const averagePrice = [];
            
            
            for (let i = 0; i < 180; i++) {
                const a = Object.entries(x.graphData.daily)[i][0];
                const b = Object.entries(x.graphData.daily)[i][1];
                const c = Object.entries(x.graphData.average)[i][0];
                const d = Object.entries(x.graphData.average)[i][1];
            
                const convertedDaily = Number(a);
                const convertedAverage = Number(c);
                const newDailyDate = new Date(convertedDaily);
                const newAverageDate = new Date(convertedAverage);
                dailyTime180.push(newDailyDate);
                dailyPrice.push(b);
                averageTime180.push(newAverageDate);
                averagePrice.push(d);
            }
            this.grandExchangeService.setGraphData(dailyTime180, dailyPrice, averageTime180, averagePrice);

             
             
             
             
             
             
             
            })

    
        })
        
    }
            


}


// this.chart = new Chart('myChart', {
//     type: 'bar',
//     data: {
//         labels: [],
//         datasets: [{
            
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });