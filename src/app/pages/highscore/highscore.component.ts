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
  console.log("1");
  break;
  case 7:
  console.log("7");
  break;
  case 30:
  console.log("30");
  break;

}
}

redirectIronMan(days) {
  switch(days) {
    case 1:
    console.log("1");
    break;
    case 7:
    console.log("7");
    break;
    case 30:
    console.log("30");
    break;
  
  }
  }

  redirectHardcoreIronMan(days) {
    switch(days) {
      case 1:
      console.log("1");
      break;
      case 7:
      console.log("7");
      break;
      case 30:
      console.log("30");
      break;
    
    }
    }

    redirectUltimateIronMan(days) {
      switch(days) {
        case 1:
        console.log("1");
        break;
        case 7:
        console.log("7");
        break;
        case 30:
        console.log("30");
        break;
      
      }
      }
}