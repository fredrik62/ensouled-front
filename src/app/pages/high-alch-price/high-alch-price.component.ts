import { Component, OnInit, Input } from '@angular/core';
import { GrandExchangeService } from '../../services/grand-exchange.service';

@Component({
  selector: 'app-high-alch-price',
  templateUrl: './high-alch-price.component.html',
  styleUrls: ['./high-alch-price.component.css']
})
export class HighAlchPriceComponent implements OnInit {
  data: any = [];
  geItemArray = [];
  geData: any;
  natPrice: Number;
  price: Number;
  constructor(private grandExchangeService: GrandExchangeService) {}
  
  ngOnInit() {
      this.grandExchangeService.getItemId()
          .toPromise()
          .then((res) => {
                  this.data = res;
  
  
                  Object.keys(this.data).forEach(key => {
                      this.geData = {
                          name: this.data[key].name,
                          buyAverage: this.data[key].buy_average,
                          sellAverage: this.data[key].sell_average,
                          overAllAverage: this.data[key].overall_average,
                          storePrice: this.data[key].sp
  
  
                      }
                      if (this.geData.name === 'Nature rune') {
                          this.natPrice = this.geData.buyAverage;
                      }
  
  
                      this.geItemArray.push(this.geData);
  
  
                  });
  
  
              }
  
  
          )
  }
  }
//TODO UPDATE OBJECT INSTEAD OF CALCULATING IT IN THE HTML
// 1. filter out items if they are less than the nature rune price
// 2. update object and store the nature price in the object
// 3. red or green background colors depending if profit or loss
// 4. page pagination limit results to 50 per page
// 5. add a search bar to filter results
// 6. chartz