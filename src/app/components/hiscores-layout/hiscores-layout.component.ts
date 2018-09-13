import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-hiscores-layout',
  templateUrl: './hiscores-layout.component.html',
  styleUrls: ['./hiscores-layout.component.css']
})
export class HiscoresLayoutComponent implements OnInit {
  @Input() players: any = [];
  @Output() showOnePlayer = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    
  }

  displayOnePlayer(username) {
   
  this.showOnePlayer.emit(username);
  }
  

}
