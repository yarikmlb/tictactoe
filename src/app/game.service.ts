import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  public matrix = [];
  public count = 0;

  constructor() {}

  generateMatrix(counter) {
    for(let i = 0; i < counter; i++){
      let arr = [];
      for (let j = 0; j < counter; j++) {
        arr.push(this.createElem());
      }
      this.matrix.push(arr);
    }
  }

  createElem(){
    return ({value: ''});
  }
}
