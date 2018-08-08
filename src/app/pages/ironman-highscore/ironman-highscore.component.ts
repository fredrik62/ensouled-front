import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ironman-highscore',
  templateUrl: './ironman-highscore.component.html',
  styleUrls: ['./ironman-highscore.component.css']
})
export class IronmanHighscoreComponent implements OnInit {
  error: string;
  feedbackEnabled = false;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllIronmanPlayers()
    .toPromise()
    .then((players) => {
     console.log(players);

     var connection = new WebSocket('ws://127.0.0.1:3000');
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

}
