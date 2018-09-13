import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-layout',
  templateUrl: './weekly-layout.component.html',
  styleUrls: ['./weekly-layout.component.css']
})
export class WeeklyLayoutComponent implements OnInit {
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
