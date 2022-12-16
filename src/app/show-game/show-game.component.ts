import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/models/Game';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-show-game',
  templateUrl: './show-game.component.html',
  styleUrls: ['./show-game.component.css']
})
export class ShowGameComponent implements OnInit {
  id: any;
  game: any;

  constructor(private route:ActivatedRoute, private service: GameServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.game = this.service.getGame(this.id);
  }
}
