import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hardcore-ironman-highscore',
  templateUrl: './hardcore-ironman-highscore.component.html',
  styleUrls: ['./hardcore-ironman-highscore.component.css']
})
export class HardcoreIronmanHighscoreComponent implements OnInit {
  error: string;
  feedbackEnabled = false;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
    this.feedbackEnabled = true;
    this.getPlayersService.getAllHardcoreIronmanPlayers()
    .toPromise()
    .then((players) => {
     console.log(players);
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
      } 
    });
  }

}
