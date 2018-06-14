import { Component, OnInit } from '@angular/core';
import { GrandExchangeService } from '../../services/grand-exchange.service';

@Component({
  selector: 'app-grandexchange-item-chart',
  templateUrl: './grandexchange-item-chart.component.html',
  styleUrls: ['./grandexchange-item-chart.component.css']
})
export class GrandexchangeItemChartComponent implements OnInit {

  constructor(private grandExchangeService: GrandExchangeService) { }

  ngOnInit() {
 
  }

}
