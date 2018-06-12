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
 
   
  
   
}
}
