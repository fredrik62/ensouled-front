import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackPlayerService } from '../../services/track-player.service';

@Component({
  selector: 'app-track-player',
  templateUrl: './track-player.component.html',
  styleUrls: ['./track-player.component.css']
})
export class TrackPlayerComponent implements OnInit {

  public inputValidator(event: any) {
    
    const pattern = /^[a-zA-Z0-9_ ]*$/;   
    
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/^[a-zA-Z0-9_ ]*$/g, "");
    

    }
  }
 
  username: String;
  error: string;
  feedbackEnabled = false;

  constructor(private router: Router, private trackPlayerService: TrackPlayerService) { }

  ngOnInit() {
  }


  submitForm(form) {
  const user = {
  rsn: this.username
  }
  this.feedbackEnabled = true;
 if (user.rsn === undefined || user.rsn.length === 0 || user.rsn.length > 12) {
   alert("error with name");
 } else {
   this.trackPlayerService.startTrackingPlayer(user)
   .then((result) => {
     this.router.navigate(['track-player', user.rsn]);
     })
   .catch((err) => {
     if (err) {
       this.error = err.error.code; 
       this.feedbackEnabled = false;
     } 
   });
}
    
}

}

