import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';

//pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { EnsouledPrayerCalculatorComponent } from './pages/ensouled-prayer-calculator/ensouled-prayer-calculator.component';
import { HerbloreCalculatorComponent } from './pages/herblore-calculator/herblore-calculator.component';
import { HighAlchPriceComponent } from './pages/high-alch-price/high-alch-price.component';

//services
import { GrandExchangeService } from './services/grand-exchange.service';
import { GrandexchangeItemComponent } from './pages/grandexchange-item/grandexchange-item.component';
import { GrandExchangeComponent } from './components/grand-exchange/grand-exchange.component';


const routes: Routes = [
  { path: '',  component: IndexPageComponent },
  { path: 'ensouled-head-calculator-2007-osrs',  component: EnsouledPrayerCalculatorComponent },
  { path: 'high-alch-calculator-2007-osrs',  component: HighAlchPriceComponent },
  { path: 'herblore-calculator-2007-osrs',  component: HerbloreCalculatorComponent },
  { path: 'grandexchange-2007-osrs',  component: GrandexchangeItemComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    EnsouledPrayerCalculatorComponent,
    IndexPageComponent,
    HighAlchPriceComponent,
    HerbloreCalculatorComponent,
    GrandexchangeItemComponent,
    GrandExchangeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
   
  ],
  providers: [
    GrandExchangeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
