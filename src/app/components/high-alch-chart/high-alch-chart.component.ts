import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MomentModule} from 'angular2-moment/moment.module';
import * as moment from 'moment';

import { GrandExchangeService } from '../../services/grand-exchange.service';

@Component({
  selector: 'app-high-alch-chart',
  templateUrl: './high-alch-chart.component.html',
  styleUrls: ['./high-alch-chart.component.css']
})
export class HighAlchChartComponent implements OnInit {
data: any;
itemInfo: any;

item: any = []
graphInfo: any;
graph: any;
daily: any;
average: any;
dailyTime180: any;
thirtyDayChange: Number;
ninetyDayChange: Number;
hundredEightyDayChange: Number;
thirty: boolean = false;
ninenty: boolean = false;
hundredEighty: boolean = false;

show30: boolean;
show90: boolean;
show180: boolean;
  constructor(private activatedRoute: ActivatedRoute, private grandExchangeService: GrandExchangeService) { }

ngOnInit() {
this.activatedRoute.params.subscribe((params) => {
const id = params.id;
this.grandExchangeService.getOneItem(id)
.toPromise()
.then((res) => {
this.data = res;

this.itemInfo = {
name: this.data.itemData.item.name,
smallIcon: this.data.itemData.item.icon,
largeIcon: this.data.itemData.item.icon_large,
itemDescription: this.data.itemData.item.description,
current: this.data.itemData.item.current.price,
day30: this.data.itemData.item.day30.change,
day90: this.data.itemData.item.day90.change,
day180: this.data.itemData.item.day180.change
}
this.item.push(this.itemInfo);



//parse the percentage
this.thirtyDayChange = parseInt(this.itemInfo.day30);
this.ninetyDayChange = parseInt(this.itemInfo.day90);
this.hundredEightyDayChange = parseInt(this.itemInfo.day180);

if (this.thirtyDayChange < 0) {
this.thirty = true;
}

if (this.ninetyDayChange < 0) {
this.ninenty = true;
}

if (this.hundredEightyDayChange < 0) {
this.hundredEighty = true;
}

})
})

}
//buttons to show which graphs to display
showDays(numOfDays) {
this.show30 = true;
this.show90 = false;
this.show180 = false;

switch(numOfDays) {
case 30:
this.show30 = false;
break;
case 90:
this.show90 = true;
break;
case 180:
this.show180 = true;
break;
}


}



}

              