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
    for(let i = 0; i < count; i++){
      let arr = [];
      for (let j = 0; j < count; j++) {
        arr.push(this.createElem());
      }
      this.matrix.push(arr);
    }
  }

  createElem(){
    return ({value: ''});
  }
}
