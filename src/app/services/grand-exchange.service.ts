import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GrandExchangeService {
private allItemsURL = "http://localhost:3000/"
private oneItemUrl = "http://localhost:3000/item/"
private chartUrl = "http://localhost:3000/item-chart/"
public sharedData: any;

  constructor(private httpClient: HttpClient) { }

  getAllItems() {
    return this.httpClient.get(this.allItemsURL)
    .map(result =>  result);
   }

   getOneItem(id) {
    return this.httpClient.get(this.oneItemUrl + id)
    .map(result =>  result);
   }

   getOneItemChart(id) {
    return this.httpClient.get(this.chartUrl + id)
    .map(result =>  result);
   }

   setGraphData(dailyTime180, dailyPrice, averageTime180, averagePrice) {
     this.sharedData = {
       dt: dailyTime180,
       dp: dailyPrice,
       at: averageTime180,
       ap: averagePrice
    } 
       
  }

   getGraphData() {
     return this.sharedData;
   }


}


