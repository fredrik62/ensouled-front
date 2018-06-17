import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-player-submit',
  templateUrl: './track-player-submit.component.html',
  styleUrls: ['./track-player-submit.component.css']
})
export class TrackPlayerSubmitComponent implements OnInit {
rsn: String;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      this.rsn = get.username;
    })
  }

}
