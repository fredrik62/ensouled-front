import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class GetPlayersService {
  private displayAllRegularPlayersDaily = "http://localhost:3000/display-all-regular-players";
  private displayAllRegularPlayersWeekly = "http://localhost:3000/display-all-regular-players-weekly";
  private displayAllRegularPlayersMonthly = "http://localhost:3000/display-all-regular-players-monthly";

  //ironman
  private displayAllIronmanPlayersDaily = "http://localhost:3000/display-all-ironman-players";
  private displayAllIronmanPlayersWeekly = "http://localhost:3000/display-all-ironman-players-weekly";
  private displayAllIronmanPlayersMonthly = "http://localhost:3000/display-all-ironman-players-monthly";

  
  //hcim
  private displayAllHardcoreIronmanPlayersDaily = "http://localhost:3000/display-all-hardcore-ironman-players";
  private displayAllHardcoreIronmanPlayersWeekly = "http://localhost:3000/display-all-hardcore-ironman-players-weekly";
  private displayAllHardcoreIronmanPlayersMonthly = "http://localhost:3000/display-all-hardcore-ironman-players-monthly";

  //uim
  private displayAllUltimateIronmanPlayersDaily = "http://localhost:3000/display-all-ultimate-ironman-players";
  private displayAllUltimateIronmanPlayersWeekly = "http://localhost:3000/display-all-ultimate-ironman-players-weekly";
  private displayAllUltimateIronmanPlayersMonthly = "http://localhost:3000/display-all-ultimate-ironman-players-monthly";

  constructor(private httpClient: HttpClient) { }
//regular players
  getAllRegPlayersDaily() {
    return this.httpClient.get(this.displayAllRegularPlayersDaily)
    .map(result =>  result);
   }

   getAllRegPlayersWeekly() {
    return this.httpClient.get(this.displayAllRegularPlayersWeekly)
    .map(result =>  result);
   }

   getAllRegPlayersMonthly() {
    return this.httpClient.get(this.displayAllRegularPlayersMonthly)
    .map(result =>  result);
   }
//ironman players
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

//hardcore ironman
   getAllHardcoreIronmanPlayersDaily() {
    return this.httpClient.get(this.displayAllHardcoreIronmanPlayersDaily)
    .map(result =>  result);
   }

   getAllHardcoreIronmanPlayersWeekly() {
    return this.httpClient.get(this.displayAllHardcoreIronmanPlayersWeekly)
    .map(result =>  result);
   }

   getAllHardcoreIronmanPlayersMonthly() {
    return this.httpClient.get(this.displayAllHardcoreIronmanPlayersMonthly)
    .map(result =>  result);
   }
//ultimate
   getAllUltimateIronmanPlayersDaily() {
    return this.httpClient.get(this.displayAllUltimateIronmanPlayersDaily)
    .map(result =>  result);
   }

   getAllUltimateIronmanPlayersWeekly() {
    return this.httpClient.get(this.displayAllUltimateIronmanPlayersWeekly)
    .map(result =>  result);
   }

   getAllUltimateIronmanPlayersMonthly() {
    return this.httpClient.get(this.displayAllUltimateIronmanPlayersMonthly)
    .map(result =>  result);
   }
}