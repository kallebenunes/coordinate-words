import { generate } from 'random-words'

export interface BoardConfig {
    linesQty: number;
    columnsQty: number;
    wordLines: string[];
    wordColumns: string[];
}

export class CreateBoardConfigWithRandomWords implements BoardConfig {
    linesQty: number;
    columnsQty: number;
    wordLines: string[] = [];
    wordColumns: string[] = [];

    constructor(linesQty: number, columnsQty: number) {
        this.linesQty = linesQty;
        this.columnsQty = columnsQty;
        this.generateWords()
    }

    generateWords(){
      for (let i = 0; i < this.linesQty; i++) {
        this.wordLines.push(generate({exactly: 1, maxLength: 5})[0]);
      }
      for (let i = 0; i < this.columnsQty; i++) {
        this.wordColumns.push(generate({exactly: 1, maxLength: 5})[0]);
      }
    }
}