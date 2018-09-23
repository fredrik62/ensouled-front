import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Pipe } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { Chart } from 'chart.js';
import { NgPipesModule } from 'ngx-pipes';


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
import { TopRegPlayersComponent } from './components/index/top-reg-players/top-reg-players.component';
import { TopImPlayersComponent } from './components/index/top-im-players/top-im-players.component';
import { TopHcimPlayersComponent } from './components/index/top-hcim-players/top-hcim-players.component';
import { TopUimPlayersComponent } from './components/index/top-uim-players/top-uim-players.component';
import { AllTwitterDeathsComponent } from './components/twitter/all-twitter-deaths/all-twitter-deaths.component';
import { ThreeTwitterDeathsComponent } from './components/twitter/three-twitter-deaths/three-twitter-deaths.component';
import { HiscoresLayoutComponent } from './components/hiscores-layout/hiscores-layout.component';
import { DailyLayoutComponent } from './components/hs-one-player-layout/daily-layout/daily-layout.component';
import { WeeklyLayoutComponent } from './components/hs-one-player-layout/weekly-layout/weekly-layout.component';
import { MonthlyLayoutComponent } from './components/hs-one-player-layout/monthly-layout/monthly-layout.component';




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
import { FindHcimDeathsComponent } from './pages/find-hcim-deaths/find-hcim-deaths.component';
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


//services
import { GrandExchangeService } from './services/grand-exchange.service';
import { TrackPlayerService } from './services/track-player.service';
import { PlayerLookupService } from './services/player-lookup.service';
import { GetPlayersService } from './services/get-players.service';
import { GetOneSkillService } from './services/get-one-skill.service';
import { TwitterFeedService } from './services/twitter-feed.service';



//pipes
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ExperienceChartComponent } from './components/experience-chart/experience-chart.component';




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

  { path: 'hiscore',  component:  HighscoreComponent, },

  
  { path: 'hiscore/regular/time/24h',  component: TwentyFourHourRegComponent },
  { path: 'hiscore/regular/time/24h/:player',  component:   DailyLayoutComponent },
  { path: 'hiscore/regular/time/weekly',  component: WeeklyRegComponent },
  { path: 'hiscore/regular/time/weekly/:player',  component:   WeeklyLayoutComponent, },
  { path: 'hiscore/regular/time/monthly',  component: MonthlyRegComponent },
  { path: 'hiscore/regular/time/monthly/:player',  component:   MonthlyLayoutComponent },

  { path: 'hiscore/ironman/time/24h',  component: TwentyFourHourIronmanComponent },
  { path: 'hiscore/ironman/time/24h/:player',  component:  DailyLayoutComponent },
  { path: 'hiscore/ironman/time/weekly',  component: WeeklyIronmanComponent },
  { path: 'hiscore/ironman/time/weekly/:player',  component:  WeeklyLayoutComponent },
  { path: 'hiscore/ironman/time/monthly',  component: MonthlyIronmanComponent },
  { path: 'hiscore/ironman/time/monthly/:player',  component:  MonthlyLayoutComponent },

  { path: 'hiscore/hardcore-ironman/time/24h',  component: TwentyFourHourHcimComponent },
  { path: 'hiscore/hardcore-ironman/time/24h/:player',  component:  DailyLayoutComponent, },
  { path: 'hiscore/hardcore-ironman/time/weekly',  component: WeeklyHcimComponent },
  { path: 'hiscore/hardcore-ironman/time/weekly/:player',  component:  WeeklyLayoutComponent },
  { path: 'hiscore/hardcore-ironman/time/monthly',  component: MonthlyHcimComponent },
  { path: 'hiscore/hardcore-ironman/time/monthly/:player',  component:  MonthlyLayoutComponent },
 

  { path: 'hiscore/ultimate-ironman/time/24h',  component: TwentyFourHourUimComponent },
  { path: 'hiscore/ultimate-ironman/time/24h/:player',  component:  DailyLayoutComponent },
  { path: 'hiscore/ultimate-ironman/time/weekly',  component: WeeklyUimComponent },
  { path: 'hiscore/ultimate-ironman/time/weekly/:player',  component:  WeeklyLayoutComponent },
  { path: 'hiscore/ultimate-ironman/time/monthly',  component: MonthlyUimComponent },
  { path: 'hiscore/ultimate-ironman/time/monthly/:player',  component:  MonthlyLayoutComponent },
  
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
    HiscoresLayoutComponent,
    //layouts
    DailyLayoutComponent,
    WeeklyLayoutComponent,
    MonthlyLayoutComponent,
    ExperienceChartComponent

    
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgPipesModule
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
