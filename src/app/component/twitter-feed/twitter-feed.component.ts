import { Component, OnInit } from '@angular/core';
import { TwitterFeedService } from '../../services/twitter-feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})



export class TwitterFeedComponent implements OnInit {
  playerInfo: any = [];
  error: string;
  feedbackEnabled = false;
  constructor(private twitterFeedService: TwitterFeedService, private router: Router) { }


  ngOnInit() {
    
    this.twitterFeedService.showHcimDeaths()
    .toPromise()
    .then((deaths) => {
     var deathInfo = deaths[0].data;

     var date = new Date(deaths[0].updated);
     var newDate = date.toISOString().substring(0, 10);
    
     let death = {
       name: deathInfo.playerUsername,
       overAllXp: deathInfo.overAllXp,
       overAllRank: deathInfo.overallRank,
       totalLevel: deathInfo.totalLevel,
       statsAtDeath: deathInfo.statsAtDeath,
       timeOfDeath: newDate

     }
     this.playerInfo.push(death);
    })
    .catch((err) => {
      if (err) {
        this.error = err.error.code; 
        
      } 
    });
  }

}
