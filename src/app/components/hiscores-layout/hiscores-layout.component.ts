import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hiscores-layout',
  templateUrl: './hiscores-layout.component.html',
  styleUrls: ['./hiscores-layout.component.css']
})
export class HiscoresLayoutComponent implements OnInit {

  constructor() { }
@Input() players: any = [];
  ngOnInit() {
  }

}
