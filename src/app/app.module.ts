import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
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
import { HighscoreOnePlayerComponent } from './components/highscore-one-player/highscore-one-player.component';
import { TwitterFeedComponent } from './component/twitter-feed/twitter-feed.component';


//pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { EnsouledPrayerCalculatorComponent } from './pages/ensouled-prayer-calculator/ensouled-prayer-calculator.component';
import { HerbloreCalculatorComponent } from './pages/herblore-calculator/herblore-calculator.component';
import { HighAlchPriceComponent } from './pages/high-alch-price/high-alch-price.component';
import { TrackPlayerComponent } from './pages/track-player/track-player.component';
import { GrandexchangeItemComponent } from './pages/grandexchange-item/grandexchange-item.component';
import { GrandexchangeItemChartComponent } from './components/grandexchange-item-chart/grandexchange-item-chart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HighscoreComponent } from './pages/highscore/highscore.component';
import { IronmanHighscoreComponent } from './pages/ironman-highscore/ironman-highscore.component';
import { HardcoreIronmanHighscoreComponent } from './pages/hardcore-ironman-highscore/hardcore-ironman-highscore.component';
import { RegularPlayerHighscoreComponent } from './pages/regular-player-highscore/regular-player-highscore.component';
import { UltimateIronmanHighscoreComponent } from './pages/ultimate-ironman-highscore/ultimate-ironman-highscore.component';
import { FindHcimDeathsComponent } from './pages/find-hcim-deaths/find-hcim-deaths.component';


//services
import { GrandExchangeService } from './services/grand-exchange.service';
import { TrackPlayerService } from './services/track-player.service';
import { PlayerLookupService } from './services/player-lookup.service';
import { GetPlayersService } from './services/get-players.service';
import { GetOneSkillService } from './services/get-one-skill.service';
import { TwitterFeedService } from './services/twitter-feed.service';



//pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { TwentyFourHourRegComponent } from './pages/highscore/twenty-four-hour-reg/twenty-four-hour-reg.component';
import { TwentyFourHourIronmanComponent } from './pages/highscore/twenty-four-hour-ironman/twenty-four-hour-ironman.component';
import { TwentyFourHourHcimComponent } from './pages/highscore/twenty-four-hour-hcim/twenty-four-hour-hcim.component';
import { TwentyFourHourUimComponent } from './pages/highscore/twenty-four-hour-uim/twenty-four-hour-uim.component';
import { WeeklyRegComponent } from './pages/highscore/weekly-reg/weekly-reg.component';
import { WeeklyIronmanComponent } from './pages/highscore/weekly-ironman/weekly-ironman.component';
import { WeeklyHcimComponent } from './pages/highscore/weekly-hcim/weekly-hcim.component';
import { WeeklyUimComponent } from './pages/highscore/weekly-uim/weekly-uim.component';
import { MonthlyRegComponent } from './pages/highscore/monthly-reg/monthly-reg.component';
import { MonthlyIronmanComponent } from './pages/highscore/monthly-ironman/monthly-ironman.component';
import { MonthlyHcimComponent } from './pages/highscore/monthly-hcim/monthly-hcim.component';
import { MonthlyUimComponent } from './pages/highscore/monthly-uim/monthly-uim.component';
import { TopRegPlayersComponent } from './components/index/top-reg-players/top-reg-players.component';
import { TopImPlayersComponent } from './components/index/top-im-players/top-im-players.component';
import { TopHcimPlayersComponent } from './components/index/top-hcim-players/top-hcim-players.component';
import { TopUimPlayersComponent } from './components/index/top-uim-players/top-uim-players.component';
import { AllTwitterDeathsComponent } from './components/twitter/all-twitter-deaths/all-twitter-deaths.component';
import { ThreeTwitterDeathsComponent } from './components/twitter/three-twitter-deaths/three-twitter-deaths.component';












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

  { path: 'highscore/regular',  component:  RegularPlayerHighscoreComponent, },
  { path: 'highscore/regular/time/24h',  component: TwentyFourHourRegComponent },
  { path: 'highscore/regular/time/weekly',  component: WeeklyRegComponent },
  { path: 'highscore/regular/time/monthly',  component: MonthlyRegComponent },
  { path: 'highscore/regular/:player',  component:  HighscoreOnePlayerComponent, },

  { path: 'highscore/ironman',  component:  IronmanHighscoreComponent, },
  { path: 'highscore/ironman/time/24h',  component: TwentyFourHourIronmanComponent },
  { path: 'highscore/ironman/time/weekly',  component: WeeklyIronmanComponent },
  { path: 'highscore/ironman/time/monthly',  component: MonthlyIronmanComponent },
  { path: 'highscore/ironman/:player',  component:  HighscoreOnePlayerComponent, },

  { path: 'highscore/hardcore-ironman',  component:  HardcoreIronmanHighscoreComponent, },
  { path: 'highscore/hardcore-ironman/time/24h',  component: TwentyFourHourHcimComponent },
  { path: 'highscore/hardcore-ironman/time/weekly',  component: WeeklyHcimComponent },
  { path: 'highscore/hardcore-ironman/time/monthly',  component: MonthlyHcimComponent },
  { path: 'highscore/hardcore-ironman/:player',  component:  HighscoreOnePlayerComponent, },

  { path: 'highscore/ultimate-ironman',  component: UltimateIronmanHighscoreComponent , },
  { path: 'highscore/ultimate-ironman/time/24h',  component: TwentyFourHourUimComponent },
  { path: 'highscore/ultimate-ironman/time/weekly',  component: WeeklyUimComponent },
  { path: 'highscore/ultimate-ironman/time/monthly',  component: MonthlyUimComponent },
  { path: 'highscore/ultimate-ironman/:player',  component:  HighscoreOnePlayerComponent, },



  { path: 'twitter',  component: TwitterFeedComponent, },
  { path: 'find-hcim-death',  component: FindHcimDeathsComponent, },
  

  



  
  { path: '500-server-error',  component: ServerErrorComponent, },
  { path: '404', component: PageNotFoundComponent  },
  { path: '**', redirectTo: '/404'}
 
];
@NgModule({
  declarations: [
    AppComponent,
    EnsouledPrayerCalculatorComponent,
    IndexPageComponent,
    HighAlchPriceComponent,
    HerbloreCalculatorComponent,
    GrandexchangeItemComponent,
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
    HighscoreOnePlayerComponent,
    IronmanHighscoreComponent,
    HardcoreIronmanHighscoreComponent,
    RegularPlayerHighscoreComponent,
    UltimateIronmanHighscoreComponent,
    TwitterFeedComponent,
    FindHcimDeathsComponent,
    ServerErrorComponent,
    //25h hs components begin here
    TwentyFourHourRegComponent,
    TwentyFourHourIronmanComponent,
    TwentyFourHourHcimComponent,
    TwentyFourHourUimComponent,
    //weekly hs
    WeeklyRegComponent,
    WeeklyIronmanComponent,
    WeeklyHcimComponent,
    WeeklyUimComponent,
    //monthly hs
    MonthlyRegComponent,
    MonthlyIronmanComponent,
    MonthlyHcimComponent,
    MonthlyUimComponent,

    
    TopRegPlayersComponent,
    TopImPlayersComponent,
    TopHcimPlayersComponent,
    TopUimPlayersComponent,
    AllTwitterDeathsComponent,
    ThreeTwitterDeathsComponent,

    
    
    
    
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
    GetPlayersService,
    GetOneSkillService,
    TwitterFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
