import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GrandExchangeService {
private baseURL = "http://localhost:3000/"
private apiUrl = "http://localhost:3000/item/"

  constructor(private httpClient: HttpClient) { }

  getAllItems() {
    return this.httpClient.get(this.baseURL)
    .map(result =>  result);
   }

   getOneItem(id) {
    return this.httpClient.get(this.apiUrl + id)
    .map(result =>  result);
   }

}


