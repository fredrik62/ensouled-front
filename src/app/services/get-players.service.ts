import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class GetPlayersService {
  private displayAllPlayers = "http://localhost:3000/display-all-players";
  //ironman
  private displayAllIronmanPlayersDaily = "http://localhost:3000/display-all-ironman-players";
  private displayAllIronmanPlayersWeekly = "http://localhost:3000/display-all-ironman-players-weekly";
  private displayAllIronmanPlayersMonthly = "http://localhost:3000/display-all-ironman-players-monthly";

  private displayAllTopIronmanCategories = "http://localhost:3000/display-all-top-ironman-players";
  //hcim
  private displayAllHardcoreIronmanPlayers = "http://localhost:3000/display-all-hardcore-ironman-players";

  //uim
  private displayAllUltimateIronmanPlayers = "http://localhost:3000/display-all-ultimate-ironman-players";

  constructor(private httpClient: HttpClient) { }

  getAllPlayers() {
    return this.httpClient.get(this.displayAllPlayers)
    .map(result =>  result);
   }

   getAllIronmanPlayersDaily() {
    return this.httpClient.get(this.displayAllIronmanPlayersDaily)
    .map(result =>  result);
   }

   getAllIronmanPlayersWeekly() {
    return this.httpClient.get(this.displayAllIronmanPlayersWeekly)
    .map(result =>  result);
   }

   getAllIronmanPlayersMonthly() {
    return this.httpClient.get(this.displayAllIronmanPlayersMonthly)
    .map(result =>  result);
   }


   getAllTopIronmanCategories() {
    return this.httpClient.get(this.displayAllTopIronmanCategories)
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