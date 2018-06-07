import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MomentModule} from 'angular2-moment/moment.module';

//components
import { AppComponent } from './app.component';
import { HighAlchChartComponent } from './components/high-alch-chart/high-alch-chart.component';
import { ToolsComponent } from './components/tools/tools.component';

//pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { EnsouledPrayerCalculatorComponent } from './pages/ensouled-prayer-calculator/ensouled-prayer-calculator.component';
import { HerbloreCalculatorComponent } from './pages/herblore-calculator/herblore-calculator.component';
import { HighAlchPriceComponent } from './pages/high-alch-price/high-alch-price.component';

//services
import { GrandExchangeService } from './services/grand-exchange.service';
import { GrandexchangeItemComponent } from './pages/grandexchange-item/grandexchange-item.component';
import { GrandExchangeComponent } from './components/grand-exchange/grand-exchange.component';
import { GrandexchangeItemChartComponent } from './components/grandexchange-item-chart/grandexchange-item-chart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',  component: IndexPageComponent },
  { path: 'tools',  component: ToolsComponent },
  { path: 'ensouled-head-calculator-2007-osrs',  component: EnsouledPrayerCalculatorComponent },
  { path: 'high-alch-calculator-2007-osrs',  component: HighAlchPriceComponent },
  { path: 'high-alch-calculator-2007-osrs/:id',  component: HighAlchChartComponent},
  { path: 'herblore-calculator-2007-osrs',  component: HerbloreCalculatorComponent },
  { path: 'grandexchange-2007-osrs',  component: GrandexchangeItemComponent },
  { path: 'grandexchange-2007-osrs/:id',  component:  GrandexchangeItemChartComponent },
  { path: '**',  component: PageNotFoundComponent  },
];
@NgModule({
  declarations: [
    AppComponent,
    EnsouledPrayerCalculatorComponent,
    IndexPageComponent,
    HighAlchPriceComponent,
    HerbloreCalculatorComponent,
    GrandexchangeItemComponent,
    GrandExchangeComponent,
    HighAlchChartComponent,
    ToolsComponent,
    GrandexchangeItemChartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MomentModule
   
  ],
  providers: [
    GrandExchangeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
