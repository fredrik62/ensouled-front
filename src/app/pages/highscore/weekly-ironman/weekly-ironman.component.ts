import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-ironman',
  templateUrl: './weekly-ironman.component.html',
  styleUrls: ['./weekly-ironman.component.css']
})
export class WeeklyIronmanComponent implements OnInit {
  players: any = [];
  error: string;
  feedbackEnabled = false;
  rank: any = 1;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllIronmanPlayersWeekly()
    .toPromise()
    .then((players) => {

      for (var p in players) {
        let accountData = {
        playerName: players[p].username,
        overAllRank: players[p].overAllRank,
        totalExperience: players[p].totalExperience,
        totalLevel:players[p].totalLevel,
        rank: this.rank++
        
       } 
      this.players.push(accountData)

     
      }
     console.log(this.players);

    
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

}

