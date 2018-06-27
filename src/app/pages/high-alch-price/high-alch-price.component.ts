import { Component, OnInit, Input } from '@angular/core';
import { GrandExchangeService } from '../../services/grand-exchange.service';
import { Router } from '@angular/router';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe'

@Component({
  selector: 'app-high-alch-price',
  templateUrl: './high-alch-price.component.html',
  styleUrls: ['./high-alch-price.component.css']
})
export class HighAlchPriceComponent implements OnInit {
  data: any = [];
  geItemArray = [];
  geData: any;
  natPrice: any;
  price: Number;
  total: any;
  p: number = 1;
  reverseCount: any = 0;
  iconUrl: String;

  constructor(private grandExchangeService: GrandExchangeService, private router: Router) {}
  
ngOnInit() {
this.grandExchangeService.getAllItems()
.toPromise()
.then((res) => {
this.data = res;
this.iconUrl = 'http://services.runescape.com/m=itemdb_oldschool/1529576970247_obj_sprite.gif?id=';  
//if no nature rune price, index has changed
this.natPrice = this.data[561].sell_average;

Object.keys(this.data).forEach(key => {
this.geData = {
id: this.data[key].id,
image: this.iconUrl + this.data[key].id,
name: this.data[key].name,
buyAverage: this.data[key].buy_average,
sellAverage: this.data[key].sell_average,
overAllAverage: this.data[key].overall_average,
alchPrice: this.data[key].sp * 0.6,
natureRuneCost: this.natPrice,
total: this.natPrice + this.data[key].sell_average,
lossOrProfit: this.data[key].sp * 0.6 - (this.natPrice + this.data[key].sell_average),


}
if (this.geData.alchPrice > 300 && this.geData.total !== this.geData.natureRuneCost) {
this.geItemArray.push(this.geData);
this.geItemArray.sort(( a, b )  => {
return b.lossOrProfit - a.lossOrProfit;
});


}
if (this.geData.lossOrProfit < 0) {
this.geData.negativeChange = true;
} 

});


})
}

reverseOrder() {
this.geItemArray.sort(( a, b )  => {
return a.lossOrProfit - b.lossOrProfit;
});
this.reverseCount++;
if (this.reverseCount === 2) {
this.geItemArray.sort(( a, b )  => {
return b.lossOrProfit - a.lossOrProfit;
});
this.reverseCount = 0;
}
}

displayItemData(id) {
this.router.navigate(['high-alch-calculator-2007-osrs', id]);
}     
}




    

    


        
        
  
//done
// 1. done
// 2. done
// 3. red or green background colors depending if profit or loss
// 4. done
// 5. done
// 6. chartz