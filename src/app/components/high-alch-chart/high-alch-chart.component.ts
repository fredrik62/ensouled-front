import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MomentModule} from 'angular2-moment/moment.module';
import * as moment from 'moment';

import { GrandExchangeService } from '../../services/grand-exchange.service';

@Component({
  selector: 'app-high-alch-chart',
  templateUrl: './high-alch-chart.component.html',
  styleUrls: ['./high-alch-chart.component.css']
})
export class HighAlchChartComponent implements OnInit {
data: any;
itemInfo: any;
graphInfo: any;
graph: any;
daily: any;
average: any;
dailyTime180: any;
show30: boolean;
show90: boolean;
show180: boolean;
  constructor(private activatedRoute: ActivatedRoute, private grandExchangeService: GrandExchangeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
        this.grandExchangeService.getOneItem(id)
         .toPromise()
           .then((res) => {
            this.data = res;

             this.itemInfo = {
              itemName: this.data.itemData.item.name,
              largeIcon: this.data.itemData.item.icon_large,
              itemDescription: this.data.itemData.item.description,
              current: this.data.itemData.item.current.price,
              day30: this.data.itemData.item.day30.change,
              day90: this.data.itemData.item.day90.change,
              day180: this.data.itemData.item.day180.change
                    }
                    
              const dailyTime180 = [];
              const averageTime180 = [];
             

              for (var i = 0; i <= 180; i++) {
                 this.graph = {
                 dailyTime: Object.entries(this.data.graphData.daily)[i][0],
                 dailyPrice: Object.entries(this.data.graphData.daily)[i][1],
                 averageTime: Object.entries(this.data.graphData.average)[i][0],
                 averagePrice: Object.entries(this.data.graphData.average)[i][1]
                            }
                            
                 const convertedDaily = Number(this.graph.dailyTime);
                 const convertedAverage = Number(this.graph.averageTime);
                 dailyTime180.push(this.daily = new Date(convertedDaily));
                 averageTime180.push(this.average = new Date(convertedAverage));
                        
                }
              })
            })
          }
          
           showDays(numOfDays) {
            this.show30 = false;
            this.show90 = false;
            this.show180 = false;

            switch(numOfDays) {
                case 30:
                this.show30 = true;
                break;
                case 90:
                this.show90 = true;
                break;
                case 180:
                this.show180 = true;
                break;
              }
              

          }
          
      
        }
                        
                



// THEN MAKE GRAPH
// 30 DAY
// 90 DAY
// 180 DAY