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

  constructor(private grandExchangeService: GrandExchangeService, private router: Router) {}
  
  ngOnInit() {
      this.grandExchangeService.getAllItems()
          .toPromise()
          .then((res) => {
                  this.data = res;
  
  
                  Object.keys(this.data).forEach(key => {
                 

                    if (this.data[key].name === 'Nature rune') {
                      this.natPrice = this.data[key].buy_average;
                    }
                      this.geData = {
                          id: this.data[key].id,
                          name: this.data[key].name,
                          buyAverage: this.data[key].buy_average,
                          sellAverage: this.data[key].sell_average,
                          overAllAverage: this.data[key].overall_average,
                          alchPrice: this.data[key].sp * 0.6,
                         
  
  
                      }
                     
                      
                      
                      
                      this.geItemArray.push(this.geData);
                    //   console.log(this.geData.alchPrice - (this.geData.buyAverage + this.natPrice))

  
  
                  });
  
  
                }
                
                
            )
        }
                        displayItemData(id) {
                            this.router.navigate(['high-alch-calculator-2007-osrs', id]);
                        }
  }
//TODO UPDATE OBJECT INSTEAD OF CALCULATING IT IN THE HTML
// 1. filter out items if they are less than the nature rune price
// 2. update object and store the nature price in the object
// 3. red or green background colors depending if profit or loss
// 4. page pagination limit results to 50 per page
// 5. add a search bar to filter results
// 6. chartz