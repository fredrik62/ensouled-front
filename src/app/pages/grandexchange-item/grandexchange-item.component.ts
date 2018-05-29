import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GrandExchangeService } from '../../services/grand-exchange.service';

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
  natureRunePrice = [];
  itemId: any;
  id: Number = 2;
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
               
                      this.geItemArray.push(this.geData);
                                   
                                   
            });
          



          })}}