import {Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})

export class SquareComponent implements OnInit {
  public count = 0;

  @Input()
  square: Object;

  constructor(){}

  changeValue(square) {
    if (this.count % 2 === 0 && square.value === '') {
      square.value = 1;
      this.count++;
    } else if (this.count % 2 !== 0 && square.value === '') {
      square.value = 0;
      this.count++;
    }
  }

  ngOnInit() {
  }

}

