import { Component, OnInit, Input, Output } from '@angular/core';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe'
import { Router } from '@angular/router';
import { TwitterFeedService } from '../../services/twitter-feed.service';

@Component({
  selector: 'app-find-hcim-deaths',
  templateUrl: './find-hcim-deaths.component.html',
  styleUrls: ['./find-hcim-deaths.component.css']
})
export class FindHcimDeathsComponent implements OnInit {
  playerInfo: any = [];
  error: string;
  feedbackEnabled = false;
  constructor(private twitterFeedService: TwitterFeedService, private router: Router) { }

  ngOnInit() {
   
  
   
  }
}
