 class Player{
     public winflag:boolean=false;
    constructor(private _name:string,private _symbol:string){
    }
    //getters read only the parameters and not set(name and symbol).
    get name():string{
        return this._name;
    }
    get symbol():string{
        return this._symbol;
    }
}
export{Player};