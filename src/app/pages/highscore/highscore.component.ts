import { Component, OnInit } from '@angular/core';
import { GetPlayersService } from '../../services/get-players.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

  constructor(private getPlayersService: GetPlayersService) { }

  ngOnInit() {
    this.getPlayersService.getAllPlayer()
    .toPromise()
    .then((res) => {
      console.log(res);
    })
  }

}
