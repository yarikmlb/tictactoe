import { Component } from '@angular/core';
import {SquareComponent} from "./square/square.component";
import {GameService} from './game.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SquareComponent],
  providers: [GameService]
})

export class AppComponent {
  public matrix = [];

  constructor(private _gameService: GameService){
    this.startGame();
  }

  startGame(){
    this.matrix = this._gameService.generateMatrix(this._gameService.size);
  }
}
