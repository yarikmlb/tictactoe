import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  private matrix = [];
  private count = 0;
  private winCombination = [];
  private startSquare = 0;
  public size = 3;
  private winLine = 3;
  private steps = {'1': [], '0': []};
  private gameWinner = false;
  private deadHeat = false;
  private canClick = true;
  private xWin = false;
  private oWin = false;

  constructor() {}

  generateMatrix(size) {
    this.xWin = false;
    this.oWin = false;
    this.count = 0;
    this.deadHeat = false;
    this.canClick = true;
    this.winLine = (this.size >= this.winLine) ? this.winLine : this.size;
    this.startSquare = 0;
    this.gameWinner = false;
    this.winCombination = [];
    this.steps = {'1': [], '0': []};
    this.matrix = [];
    let index = 0;
    for(let i = 0; i < size; i++){
      let arr = [];
      for (let j = 0; j < size; j++) {
        arr.push(this.createElem(index));
        index++;
      }
      this.matrix.push(arr);
    }
    return this.matrix;
  }

  createElem(index){
    return ({value: '', index: index});
  }

  nextStep(square){
    if (this.count % 2 === 0 && !square.value) {
      square.value = '1';
      this.count++;
    } else if (this.count % 2 !== 0 && !square.value) {
      square.value = '0';
      this.count++;
    }
    this.startSquare += 1;
    this.steps[square.value].push(square.index);
    if (this.startSquare >= ((this.winLine * 2) - 1)) {
      if (!this.winCombination.length) {
        this.generateWinCombinations();
      }
      if (this.checkWinner(square.value)) {
        this.gameWinner = true;
        this.canClick = !this.canClick;
        if(this.count % 2 === 0 && this.gameWinner && this.xWin === false){
          this.oWin = true;
        }else if(this.count % 2 !== 0 && this.gameWinner && this.oWin === false){
          this.xWin = true;
        }
      }
    }
    if (this.startSquare === (this.size * this.size)) {
      this.deadHeat = true;
      this.canClick = !this.canClick;
    }
  }

  horizontal(start) {
    let res = [];
    while (res.length !== this.winLine) {
      res.push(start);
      start++;
    }
    return res;
  }

  vertical(start) {
    let res = [];
    while (res.length !== this.winLine) {
      res.push(start);
      start += this.size;
    }
    return res;
  }

  rightDiagonal(start) {
    let res = [];
    while (res.length !== this.winLine) {
      res.push(start);
      start += (this.size + 1);
    }
    return res;
  }

  leftDiagonal(start) {
    let res = [];
    while (res.length !== this.winLine) {
      res.push(start);
      start += (this.size - 1);
    }
    return res;
  }

  generateWinCombinations () {
    for (let j = 0; j < (this.size * this.size); j += this.size) {
      for (let i = 0; i <= (this.size - this.winLine); i++) {
        this.winCombination.push(this.horizontal(i + j));
      }
    }
    for (let j = 0; j < this.size * (this.size - this.winLine + 1); j++) {
      this.winCombination.push(this.vertical(j));
    }
    for (let j = 0; j < this.size * (this.size - this.winLine + 1); j += this.size) {
      for (let i = 0; i <= (this.size - this.winLine); i++) {
        this.winCombination.push(this.rightDiagonal( i+j ));
      }
    }
    for (let j = 0; j < (this.size * (this.size - this.winLine + 1)); j += this.size) {
      for (let i = this.winLine - 1; i < this.size; i++) {
        this.winCombination.push(this.leftDiagonal(i + j));
      }
    }
  }

  checkWinner(value) {
    let winner= false;
    for (let i = 0; i < this.winCombination.length; i++) {
      if (this.winCombination[i].every((number) => {
          return this.steps[value].indexOf(number) !== -1;
        })) {
        winner= true;
        break;
      }
    }
    return winner;
  }
}
