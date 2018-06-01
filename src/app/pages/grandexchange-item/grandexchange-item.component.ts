import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GrandExchangeService } from '../../services/grand-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grandexchange-item',
  templateUrl: './grandexchange-item.component.html',
  styleUrls: ['./grandexchange-item.component.css']
})
//this is the parent
export class GrandexchangeItemComponent implements OnInit {

  data: any = [];
  geItemArray = [];
  geData: any;
 

  
  constructor(private grandExchangeService: GrandExchangeService, private router: Router) {}

  ngOnInit() {
      this.grandExchangeService.getItemId()
          .toPromise()
          .then((res) => {
              this.data = res;
              

              Object.keys(this.data).forEach(key => {
                      this.geData = {
                        id: this.data[key].id,
                        name: this.data[key].name,
                        buyAverage: this.data[key].buy_average,
                        sellAverage: this.data[key].sell_average,
                        overAllAverage: this.data[key].overall_average,
                        storePrice: this.data[key].sp
                                        
                                   }
               
                      this.geItemArray.push(this.geData);
                                   
                                   
            });
            
            
            
          })
        }
        
        displayItemData(id) {
          this.router.navigate(['grandexchange-2007-osrs', id]);
        }
      }