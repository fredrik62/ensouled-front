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
  item: any = [];
  natIcon: String;
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
        this.item = res;
        this.iconUrl = 'https://rsbuddy.com/items/'
        //if no nature rune price, index has changed
  
        

          this.natPrice = this.item[0].data[202].sell_average;
          this.natIcon = this.iconUrl + '561' + '.png';
          Object.keys(this.item[0].data).forEach(key => {
            this.geData = {
              id: this.item[0].data[key].id,
              image: this.iconUrl + this.item[0].data[key].id + '.png',
              name: this.item[0].data[key].name,
              buyAverage: this.item[0].data[key].buy_average,
              sellAverage: this.item[0].data[key].sell_average,
              overAllAverage: this.item[0].data[key].overall_average,
              alchPrice: this.item[0].data[key].sp * 0.6,
              natureRuneCost: this.natPrice,
              total: this.natPrice + this.item[0].data[key].sell_average,
              lossOrProfit: this.item[0].data[key].sp * 0.6 - (this.natPrice + this.item[0].data[key].sell_average),
    
            }
    
            if (this.geData.alchPrice > 300 && this.geData.total !== this.geData.natureRuneCost) {
              this.geItemArray.push(this.geData);
              this.geItemArray.sort((a, b) => {
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
    this.geItemArray.sort((a, b) => {
      return a.lossOrProfit - b.lossOrProfit;
    });
    this.reverseCount++;
    if (this.reverseCount === 2) {
      this.geItemArray.sort((a, b) => {
        return b.lossOrProfit - a.lossOrProfit;
      });
      this.reverseCount = 0;
    }
  }
  
  displayItemData(id) {
    this.router.navigate(['high-alch-calculator-2007-osrs', id]);
  }
  }

