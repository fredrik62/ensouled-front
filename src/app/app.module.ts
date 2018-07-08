import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Chart } from 'chart.js';


//components
import { AppComponent } from './app.component';
import { HighAlchChartComponent } from './components/high-alch-chart/high-alch-chart.component';
import { ToolsComponent } from './components/tools/tools.component';
import { OneMonthChartComponent } from './components/charts/one-month-chart/one-month-chart.component';
import { ThreeMonthChartComponent } from './components/charts/three-month-chart/three-month-chart.component';
import { SixMonthChartComponent } from './components/charts/six-month-chart/six-month-chart.component';
import { TrackPlayerSubmitComponent } from './components/track-player-submit/track-player-submit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


//pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { EnsouledPrayerCalculatorComponent } from './pages/ensouled-prayer-calculator/ensouled-prayer-calculator.component';
import { HerbloreCalculatorComponent } from './pages/herblore-calculator/herblore-calculator.component';
import { HighAlchPriceComponent } from './pages/high-alch-price/high-alch-price.component';
import { TrackPlayerComponent } from './pages/track-player/track-player.component';
import { GrandexchangeItemComponent } from './pages/grandexchange-item/grandexchange-item.component';
import { GrandExchangeComponent } from './components/grand-exchange/grand-exchange.component';
import { GrandexchangeItemChartComponent } from './components/grandexchange-item-chart/grandexchange-item-chart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HighscoreComponent } from './pages/highscore/highscore.component';

//services
import { GrandExchangeService } from './services/grand-exchange.service';
import { TrackPlayerService } from './services/track-player.service';
import { PlayerLookupService } from './services/player-lookup.service';
import { GetPlayersService } from './services/get-players.service';


//pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';











const routes: Routes = [
  { path: '',  component: IndexPageComponent },
  { path: 'tools',  component: ToolsComponent },
  { path: 'ensouled-head-calculator-2007-osrs',  component: EnsouledPrayerCalculatorComponent },
  { path: 'high-alch-calculator-2007-osrs',  component: HighAlchPriceComponent },
  { path: 'high-alch-calculator-2007-osrs/:id',  component: HighAlchChartComponent},
  { path: 'herblore-calculator-2007-osrs',  component: HerbloreCalculatorComponent },
  { path: 'grandexchange-2007-osrs',  component: GrandexchangeItemComponent },
  { path: 'grandexchange-2007-osrs/:id',  component:  GrandexchangeItemChartComponent },
  { path: 'track-player',  component:  TrackPlayerComponent },
  { path: 'track-player/:username',  component:  TrackPlayerSubmitComponent, },
  { path: 'highscore',  component:  HighscoreComponent, },
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
    PageNotFoundComponent,
    SearchFilterPipe,
    OneMonthChartComponent,
    ThreeMonthChartComponent,
    SixMonthChartComponent,
    TrackPlayerComponent,
    TrackPlayerSubmitComponent,
    NavBarComponent,
    HighscoreComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
 
   
  ],
  providers: [
    GrandExchangeService,
    TrackPlayerService,
    PlayerLookupService,
    GetPlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
