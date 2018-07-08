import { Component, OnInit } from '@angular/core';
import { PlayerLookupService } from '../../services/player-lookup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-highscore-one-player',
  templateUrl: './highscore-one-player.component.html',
  styleUrls: ['./highscore-one-player.component.css']
})
export class HighscoreOnePlayerComponent implements OnInit {
rsn: String;
playerStats: any = [];
  constructor(private playerLookupService: PlayerLookupService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      this.rsn = get.player;
      this.playerLookupService.getOnePlayer(this.rsn)
     .toPromise()
     .then((result) => {
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
            let playerData = {
              skill: key,
              rank: result[key].rank,
              level: result[key].level,
              xp: result[key].xp,
            }
            this.playerStats.push(playerData);
        }
    }
      
       })
     .catch((err) => {
      console.log(err);
     });
     })
  }
  
}
