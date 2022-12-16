import { Injectable } from '@angular/core';
import { Game } from 'src/models/Game';
import * as gamedata from '../../data/game_data.json';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  games: Game[] = []; // Create Game array data object

  constructor() {
    // Populate Games Arrays
    for (let i = 0; i < 9; i++) {
      let game = new Game(gamedata[i].id, gamedata[i].title, gamedata[i].genre,
                          gamedata[i].year, gamedata[i].platform, gamedata[i].rating);

      this.games.push(game);
    }
  }

  // Return the All Games
  public getAllGames() {
    return this.games;
  }

  // Get an Game by it's id
  public getGame(id: number) {
    for(let x = 0; x < this.games.length; x++) {
      if(this.games[x].Id) {
        return this.games[x];
      }
    }

    return null;
  }

  // Create an Game
  public createGame(game: Game) {
    this.games.push(game);
  }

  // Update an Game
  public updateGame(game: Game, id:number) {
    for (let i = 0; i < this.games.length; i++) {
      if(this.games[i].Id === id) {
        this.games.splice(id, 1, game);
        return 0;
      }
    }
    
    return -1
  }

  // Delete Game
  public deleteGame(id:number) {
    for (let i = 0; i < this.games.length; i++) {
      if(this.games[i].Id === id) {
        this.games.splice(i, 1);
        console.log(`Game ID ${id} was deleted!`);
        return 0;
      }
    }
    
    console.log("Game couldn't be deleted!")
    return -1
  }
}
