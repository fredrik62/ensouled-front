import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monthly-layout',
  templateUrl: './monthly-layout.component.html',
  styleUrls: ['./monthly-layout.component.css']
})
export class MonthlyLayoutComponent implements OnInit {
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
