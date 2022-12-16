import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/models/Game';
import { GameServiceService } from '../service/game-service.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  id: any;
  title: any;
  platform: any;
  genre: any;
  year: any;
  rating: any;
  selectedGame: any;
  newAlbum: any;

  constructor(private route: ActivatedRoute, private service: GameServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectedGame = this.service.getGame(parseInt(this.id));
  }

  editGame() {
    this.service.updateGame(
      new Game(this.id, this.title, this.genre, this.year, this.platform, this.rating), this.id
    );
  }
}
