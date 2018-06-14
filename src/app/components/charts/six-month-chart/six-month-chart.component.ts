import { Component, OnInit, HostListener } from '@angular/core';
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
chart: any;
desktopDisplay: boolean = window.innerWidth > 400;
@HostListener('window:resize') resizeDetection() { 
    this.desktopDisplay = window.innerWidth > 800;
    this.chart.options.scales.xAxes[0].ticks.display = window.innerWidth > 800;
  }
constructor(private activatedRoute: ActivatedRoute, private grandExchangeService: GrandExchangeService) { }

ngOnInit() {
    const allData = this.grandExchangeService.getGraphData();
    const dt = allData.dt;
    const at = allData.at;
    const dp = allData.dp;
    const ap = allData.ap;
   

    this.chart = new Chart('myChart', {
        type: 'line',
        data: {
            labels: dt,at,
            datasets: [{
                    data: dp,
                    borderColor: '#00CED1',
                    fill: false
                },
                {
                    data: ap,
                    borderColor: '#FFFF00',
                    fill: false
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






    
 