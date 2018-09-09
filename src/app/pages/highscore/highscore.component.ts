import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
players: any = [];
error: string;
feedbackEnabled = false;
  constructor(private getPlayersService: GetPlayersService, private router: Router) { }

  ngOnInit() {
   

}

redirectRegular(days) {
switch(days) {
  case 1:
  this.router.navigate(['hiscore/regular/time/24h']);
  break;
  case 7:
  this.router.navigate(['hiscore/regular/time/weekly']);
  break;
  case 30:
  this.router.navigate(['hiscore/regular/time/monthly']);
  break;

}
}

redirectIronMan(days) {
  switch(days) {
    case 1:
    this.router.navigate(['hiscore/ironman/time/24h']);
    break;
    case 7:
    this.router.navigate(['hiscore/ironman/time/weekly']);
    break;
    case 30:
    this.router.navigate(['hiscore/ironman/time/monthly']);
    break;
  
  }
  }

  redirectHardcoreIronMan(days) {
    switch(days) {
      case 1:
      this.router.navigate(['hiscore/hardcore-ironman/time/24h']);
      break;
      case 7:
      this.router.navigate(['hiscore/hardcore-ironman/time/weekly']);
      break;
      case 30:
      this.router.navigate(['hiscore/hardcore-ironman/time/monthly']);
      break;
    
    }
    }

    redirectUltimateIronMan(days) {
      switch(days) {
        case 1:
        this.router.navigate(['hiscore/ultimate-ironman/time/24h']);
        break;
        case 7:
        this.router.navigate(['hiscore/ultimate-ironman/time/weekly']);
        break;
        case 30:
        this.router.navigate(['hiscore/ultimate-ironman/time/monthly']);
        break;
      
      }
      }
}