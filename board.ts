  class board{
    
    public gamearea:string[][];
//creates the game board
    constructor(private _row:number,private _col:number){
        this.gamearea = [];//create array
        for(let i: number = 0; i < this._row; i++) {
            this.gamearea[i] = [];//create matrix(board)
            for(let j: number = 0; j< this._col; j++) {
                this.gamearea[i][j] = " ";
            }
        }
    }

    get row():number{
        return this._row;
    } 

    get col():number{
        return this._col;
    } 
//prints the board
    print(){
        for(let i:number=0;i<this._row;i++){
            let row:string="";
            for(let j:number=0;j<this._row;j++){
                row += this.gamearea[i][j];
            }
            console.log(row);//print rows of the board
        }
    }    
}
export{board};