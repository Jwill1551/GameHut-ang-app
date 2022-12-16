import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/models/Game';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
  id: any;
  title: any;
  platform: any;
  genre: any;
  year: any;
  rating: any;
  games: any;

  constructor(private route: ActivatedRoute, private service: GameServiceService) {
  }

  ngOnInit(): void {
    this.games = this.service.getAllGames();
    this.id = this.games.length + 1;
  }

  newGame() {
    this.service.createGame(new Game(this.id, this.title, this.genre, this.year, this.platform, this.rating));
    alert("Game is Created!");
  }

}
