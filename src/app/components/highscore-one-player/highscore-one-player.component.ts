import { Component, OnInit, Input} from '@angular/core';
import { PlayerLookupService } from '../../services/player-lookup.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-highscore-one-player',
  templateUrl: './highscore-one-player.component.html',
  styleUrls: ['./highscore-one-player.component.css']
})
export class HighscoreOnePlayerComponent implements OnInit {
@Input() playerStats: any = [];
error: string;
feedbackEnabled = false;
skillBadges = ['Attack_icon.png', 'Defence_icon.png', 'Strength_icon.png', 'Ranged_icon.png', 'Magic_icon.png', 'Cooking_icon.png'
,'Woodcutting_icon.png', 'Fletching_icon.png', 'Fishing_icon.png', 'Firemaking_icon.png', 'Crafting_icon.png'
,'Smithing_icon.png', 'Mining_icon.png', 'Herblore_icon.png', 'Agility_icon.png', 'Thieving_icon.png', 'Slayer_icon.png'
,'Farming_icon.png', 'Runecrafting_icon.png', 'Hunter_icon.png', 'Construction_icon.png'];
  constructor(private playerLookupService: PlayerLookupService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
   
   
  
  }
}
