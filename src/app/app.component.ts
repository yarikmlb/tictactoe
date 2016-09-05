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
  public size = 4;

  constructor(private _gameService: GameService){
     this.startGame(this.size);
  }

  startGame(size){
    this.matrix = this._gameService.generateMatrix(size);
  }
}
