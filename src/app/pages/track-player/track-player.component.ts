import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackPlayerService } from '../../services/track-player.service';

@Component({
  selector: 'app-track-player',
  templateUrl: './track-player.component.html',
  styleUrls: ['./track-player.component.css']
})
export class TrackPlayerComponent implements OnInit {

 
  username: String;
 

  constructor(private router: Router, private trackPlayerService: TrackPlayerService) { }

  ngOnInit() {
  }


  submitForm(form) {
  const user = {
  rsn: this.username
  }
  this.trackPlayerService.startTrackingPlayer(user)
  this.router.navigate(['track-player', user.rsn])
  .then((result) => {
    console.log(result)  // router.navigate here once we got data
    })
  .catch((err) => {
   console.log(err);
  });
    
}

}
