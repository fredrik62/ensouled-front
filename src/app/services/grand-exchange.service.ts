import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GrandExchangeService {
private baseURL = "http://localhost:3000/"
private apiUrl = "http://localhost:3000/item/"
 public sharedData: any;

  constructor(private httpClient: HttpClient) { }

  getAllItems() {
    return this.httpClient.get(this.baseURL)
    .map(result =>  result);
   }

   getOneItem(id) {
    return this.httpClient.get(this.apiUrl + id)
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


