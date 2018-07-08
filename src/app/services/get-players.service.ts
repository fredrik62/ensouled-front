import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class GetPlayersService {
  private playerUrl = "http://localhost:3000/display"

  constructor(private httpClient: HttpClient) { }

  getAllPlayer() {
    return this.httpClient.get(this.playerUrl)
    .map(result =>  result);
   }
}