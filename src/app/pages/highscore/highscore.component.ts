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
  this.router.navigate(['highscore/regular/time/24h']);
  break;
  case 7:
  this.router.navigate(['highscore/regular/time/weekly']);
  break;
  case 30:
  this.router.navigate(['highscore/regular/time/monthly']);
  break;

}
}

redirectIronMan(days) {
  switch(days) {
    case 1:
    this.router.navigate(['highscore/ironman/time/24h']);
    break;
    case 7:
    this.router.navigate(['highscore/ironman/time/weekly']);
    break;
    case 30:
    this.router.navigate(['highscore/ironman/time/monthly']);
    break;
  
  }
  }

  redirectHardcoreIronMan(days) {
    switch(days) {
      case 1:
      this.router.navigate(['highscore/hardcore-ironman/time/24h']);
      break;
      case 7:
      this.router.navigate(['highscore/hardcore-ironman/time/weekly']);
      break;
      case 30:
      this.router.navigate(['highscore/hardcore-ironman/time/monthly']);
      break;
    
    }
    }

    redirectUltimateIronMan(days) {
      switch(days) {
        case 1:
        this.router.navigate(['highscore/ultimate-ironman/time/24h']);
        break;
        case 7:
        this.router.navigate(['highscore/ultimate-ironman/time/weekly']);
        break;
        case 30:
        this.router.navigate(['highscore/ultimate-ironman/time/monthly']);
        break;
      
      }
      }
}