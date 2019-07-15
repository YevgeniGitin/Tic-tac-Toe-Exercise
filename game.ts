import { Player } from "./player";
import { board } from "./board";
import {GameStatus} from "./gamestatus";
 class Game{
    public status:number=0;//game status 0= in progres,1=finish
    private movesnum:number=0;//moves number for enter to summery and then print the summery
    private summary:string[]=[];//summery
    private playersnum:number=0;//for check if max 2 players
    private player1:Player|undefined;
    private player2:Player|undefined;
    public turn:string="player1";
    public board:board;
    
    constructor(row:number,col:number){
        this.board=new board(row,col);

    }
    addPlayer(player:Player){
        if(this.playersnum===0){//if it is first player add
            this.player1=player;
            this.playersnum++;
        }
        else if(this.playersnum===1){//if it is second player add
            this.player2=player;
            this.playersnum++;
        }
        else
        console.log("two players is defined");
    }   
    printSummary(){
        let res:string=GameStatus[this.status];//add the status to the print result
        if(this.status){//check if the game finished
            if(this.player1.winflag){//add first player nam if he won
                res+=` - "${this.player1.name}" won`;
            }
            if(this.player2.winflag){//add second player nam if he won
                res+=` - "${this.player2.name}" won`;
            }
        }else{//game is in progress
            res+=` - "Game is in progress" `;
        }
        res+=" moves history:"
        for(let i:number=0;i<this.movesnum;i++)
            res+=` ${this.summary[i]}`;//add the move history
        console.log(res);
    }

    nextMove(row:number,col:number):string{
        if(this.status){//check if some one won
            if(this.player1.winflag)
                return `false (Game over,${this.player1.name} won)`;
            if(this.player2.winflag)
                 return `false (Game over,${this.player2.name} won)`; 
        }
        if(this.board.gamearea[row][col]!=="o" && this.board.gamearea[row][col]!=="x"){//check if the cell is empty
            if(this.turn==="player1"){//check if the first player is playing
                this.board.gamearea[row][col]=this.player1.symbol;
                this.summary[this.movesnum]=`${this.player1.name} (${row},${col})`;//add the move to hystory
                this.movesnum++;
                this.turn="player2"; //give the turn to second player
                if(this.checkwon(row,col,this.player1.symbol)){//chack if won
                    this.status=1;
                    this.player1.winflag=true;
                }    
                return "true";
            }
            else{//the same to the second player
                this.board.gamearea[row][col]=this.player2.symbol;;
                this.summary[this.movesnum]=`${this.player2.name} (${row},${col})`;
                this.movesnum++;
                this.turn="player1";
                if(this.checkwon(row,col,this.player1.symbol)){
                    this.status=1;
                    this.player2.winflag=true;
                }    
                return "true";
            }
        }else{
            return "false (cell is already occupied)";
         }
    }
    //check if won
    private checkwon(row:number,col:number,symbole:string):boolean{
        let rowflag :boolean=true;//flag for row
        let colflag :boolean=true;//flag for col
        let digupdownflag :boolean=true;//flag for diagonal from up left to down right
        let digdownupflag :boolean=true;//flag for diagonal from up right to down left
        for(let i:number=0;i<this.board.col;i++){//chek the row
            if(this.board.gamearea[row][i]!==symbole)
                rowflag=false;
        }
        for(let i:number=0;i<this.board.row;i++){//check the col
            if(this.board.gamearea[i][col]!==symbole)
                colflag=false;
        }
        for(let i:number=0;i<this.board.row;i++)//check diagonal from up left to down right
            if(this.board.gamearea[i][i]!==symbole)
            digupdownflag=false;
        for(let i:number=this.board.row-1, j:number=0;i>=0&&j<this.board.col;i--,j++)//check diagonal from up right to down left
            if(this.board.gamearea[i][j]!==symbole)
            digdownupflag=false;
        
        if(rowflag||colflag||digupdownflag||digdownupflag)//check if win
            return true;
        else
            return false;
    }
}
export {Game};
export {Player};