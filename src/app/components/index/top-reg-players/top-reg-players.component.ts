import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-reg-players',
  templateUrl: './top-reg-players.component.html',
  styleUrls: ['./top-reg-players.component.css']
})
export class TopRegPlayersComponent implements OnInit {

  topDailyPlayers: any = [];
  topWeeklyPlayers: any = [];
  topMonthlyPlayers: any = [];
  rank: any = 1;
  
  error: string;
  feedbackEnabled = false;
  
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.showDailyTop();
    this.showWeeklyTop();
    this.showMonthlyTop();
  }

  showDailyTop() {
    this.getPlayersService.getAllRegPlayersDaily()
    .toPromise()
    .then((playerdata) => {
    
      this.topDailyPlayers = this.findTopPlayers(playerdata);
      console.log(this.topDailyPlayers);
     
     
     })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

  showWeeklyTop() {
    this.getPlayersService.getAllRegPlayersWeekly()
    .toPromise()
    .then((playerdata) => {
    
      this.topWeeklyPlayers = this.findTopPlayers(playerdata);
      })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

  showMonthlyTop() {
    this.getPlayersService.getAllRegPlayersMonthly()
    .toPromise()
    .then((playerdata) => {
    
     this.topMonthlyPlayers = this.findTopPlayers(playerdata);
     })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

  findTopPlayers(players) {

    const accounts = [];
    const topAccounts = [];

    for (let top in players) {

      let accountData = {
        playerName: players[top].username,
        overAllRank: players[top].overAllRank,
        totalExperience: players[top].totalExperience,
        totalLevel: players[top].totalLevel, 
        rank: this.rank++

      }
      accounts.push(accountData);
    }
    accounts.sort((a, b) => {
      return b.totalExperience - a.totalExperience;
    });

    for (let i = 0; i < 3; i++) {
      topAccounts.push(accounts[i]);
    }
    return topAccounts;
  }

}
