import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class GetPlayersService {
  private displayAllPlayers = "http://localhost:3000/display-all-players";
  private displayAllIronmanPlayers = "http://localhost:3000/display-all-ironman-players";
  private displayAllHardcoreIronmanPlayers = "http://localhost:3000/display-all-hardcore-ironman-players";
  private displayAllUltimateIronmanPlayers = "http://localhost:3000/display-all-ultimate-ironman-players";

  constructor(private httpClient: HttpClient) { }

  getAllPlayers() {
    return this.httpClient.get(this.displayAllPlayers)
    .map(result =>  result);
   }

   getAllIronmanPlayers() {
    return this.httpClient.get(this.displayAllIronmanPlayers)
    .map(result =>  result);
   }

   getAllHardcoreIronmanPlayers() {
    return this.httpClient.get(this.displayAllHardcoreIronmanPlayers)
    .map(result =>  result);
   }

   getAllUltimateIronmanPlayers() {
    return this.httpClient.get(this.displayAllUltimateIronmanPlayers)
    .map(result =>  result);
   }
}