import {Component, OnInit, Input} from '@angular/core';
import {GameService} from '../game.service';

@Component({
  moduleId: module.id,
  selector: 'app-square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})

export class SquareComponent implements OnInit {

  @Input()
  square: Object;

  constructor(private _gameService: GameService){}

  changeValue(square) {
    this._gameService.nextStep(square);
  }

  ngOnInit() {}

}
