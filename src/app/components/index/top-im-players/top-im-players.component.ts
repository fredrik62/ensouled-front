import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-im-players',
  templateUrl: './top-im-players.component.html',
  styleUrls: ['./top-im-players.component.css']
})
export class TopImPlayersComponent implements OnInit {

  topDailyPlayers: any = [];
  topWeeklyPlayers: any = [];
  topMonthlyPlayers: any = [];
  
  error: string;
  feedbackEnabled = false;
  
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllTopIronmanCategories()
    .toPromise()
    .then((playerdata) => {
    
     console.log(playerdata);

    
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

}