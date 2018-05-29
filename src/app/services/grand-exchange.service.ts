import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GrandExchangeService {
private id: any;
private baseURL = "http://localhost:3000/"
private itemURL = "http://localhost:3000/item/"
  constructor(private httpClient: HttpClient) { }

  getItemId() {
    return this.httpClient.get(this.baseURL)
    .map(result =>  result);
   }

   getItemData(id: any) {
    return this.httpClient.post(this.itemURL, id)
    .map(result =>  result);
   }

}

