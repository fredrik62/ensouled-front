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

selectedOption: any;

sortOptions = [
    {
        value: 'Regular',
        display: 'Regular'
    },
    {
        value: 'Ironman',
        display: 'Ironman'
    },
    {
        value: 'Hardcore',
        display: 'Hardcore Ironman'
    },
    {
        value: 'Ultimate',
        display: 'Ultimate Ironman'
    }
];




 
username: String;
error: string;
feedbackEnabled = false;
loading: boolean = false;
result: any = [];
ironman: String;
hardcore: String;
ultimate: String;
selecttype: any;


  constructor(private router: Router, private trackPlayerService: TrackPlayerService) { }

  ngOnInit() {
  }
  
  
  submitForm(form) {
    this.feedbackEnabled = true;
    this.loading = true;
      if (this.selectedOption === undefined) {
        this.loading = false;
        this.error = 'Select Correct Game Mode'; 
      }
  const user = {
  rsn: this.username,
  ironman: this.sortOptions[1].value,
  hardcore: this.sortOptions[2].value,
  ultimate: this.sortOptions[3].value
}


  
  //if regular account
  if (this.selectedOption.value === this.sortOptions[0].value) {
    this.trackPlayerService.startTrackingRegularPlayer(user)
    .then((result) => {
      this.router.navigate(['track-player', user.rsn]);
      })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
        this.loading = false;
      } 
    });
   }
//if ironman account
   if (this.selectedOption.value === this.sortOptions[1].value) {
    this.trackPlayerService.startTrackingIronmanPlayer(user)
    .then((result) => {
      this.router.navigate(['track-player', user.rsn]);
      })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
        this.loading = false;
      } 
    });
   }
//if hardcore ironman account
   if (this.selectedOption.value === this.sortOptions[2].value) {
    this.trackPlayerService.startTrackingHardcoreIronmanPlayer(user)
    .then((result) => {
      this.router.navigate(['track-player', user.rsn]);
      })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
        this.loading = false;
      } 
    });
   }
//if ultimate ironman account
   if (this.selectedOption.value === this.sortOptions[3].value) {
    this.trackPlayerService.startTrackingUltimateIronmanPlayer(user)
    .then((result) => {
      this.router.navigate(['track-player', user.rsn]);
      })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        this.feedbackEnabled = false;
        this.loading = false;
      } 
    });
   }


}
    
}



