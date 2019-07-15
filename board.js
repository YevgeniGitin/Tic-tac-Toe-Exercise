"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class board {
    //creates the game board
    constructor(_row, _col) {
        this._row = _row;
        this._col = _col;
        this.gamearea = []; //create array
        for (let i = 0; i < this._row; i++) {
            this.gamearea[i] = []; //create matrix(board)
            for (let j = 0; j < this._col; j++) {
                this.gamearea[i][j] = " ";
            }
        }
    }
    get row() {
        return this._row;
    }
    get col() {
        return this._col;
    }
    //prints the board
    print() {
        for (let i = 0; i < this._row; i++) {
            let row = "";
            for (let j = 0; j < this._row; j++) {
                row += this.gamearea[i][j];
            }
            console.log(row); //print rows of the board
        }
    }
}
exports.board = board;
