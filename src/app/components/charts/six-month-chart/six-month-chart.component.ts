import { Component, OnInit } from '@angular/core';
import { GrandExchangeService } from '../../../services/grand-exchange.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-six-month-chart',
  templateUrl: './six-month-chart.component.html',
  styleUrls: ['./six-month-chart.component.css']
})
export class SixMonthChartComponent implements OnInit {
data: any;
graph: any;
daily: any;
dailyTime180: any;
averageTime180: any = [];
dailyPrice: any;
averagePrice: any;
average: any;
chart: any;
can: any;
  constructor(private activatedRoute: ActivatedRoute, private grandExchangeService: GrandExchangeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
        this.grandExchangeService.getOneItem(id)
         .toPromise()
           .then((res) => {
             this.data = res
             graph(this.data);
             
           })
        })
        
        
    }
    
}

const graph = (data) => {
const x = data;
const dailyTime180 = [];
const dailyPrice = [];
const averageTime180 = [];
const averagePrice = [];


for (let i = 0; i < 180; i++) {
    const a = Object.entries(x.graphData.daily)[i][0];
    const b = Object.entries(x.graphData.daily)[i][1];
    const c = Object.entries(x.graphData.average)[i][0]
    const d = Object.entries(x.graphData.average)[i][1]

    const convertedDaily = Number(a);
    const convertedAverage = Number(c);
    const newDailyDate = new Date(convertedDaily);
    const newAverageDate = new Date(convertedAverage);
    dailyTime180.push(newDailyDate);
    dailyPrice.push(b);
    averageTime180.push(newAverageDate);
    averagePrice.push(d);
}
console.log(dailyTime180.length);

    
}  