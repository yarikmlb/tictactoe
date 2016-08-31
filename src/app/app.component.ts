import { Component } from '@angular/core';
import {SquareComponent} from "./square/square.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SquareComponent]
})
export class AppComponent {
  public matrix = [];

  constructor(){
    this.generateMatrix(4);
  }

  generateMatrix(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(this.createElem());
      this.matrix.push(arr);
    }
  }

  createElem(){
    return ({value: ''});
  }
}
