import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/models/Game';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-display-games',
  templateUrl: './display-games.component.html',
  styleUrls: ['./display-games.component.css']
})
export class DisplayGamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private route: ActivatedRoute, private service: GameServiceService) { }

  ngOnInit(): void {
    this.games = this.service.getAllGames();
  }
}
