import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-layout',
  templateUrl: './daily-layout.component.html',
  styleUrls: ['./daily-layout.component.css']
})
export class DailyLayoutComponent implements OnInit {
  rsn: String;
  playerStats: any = [];
  error: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((get) => {
      this.rsn = get.player;
      console.log(this.rsn);
  });
  }
}
