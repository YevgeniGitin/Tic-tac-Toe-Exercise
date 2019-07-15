"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(_name, _symbol) {
        this._name = _name;
        this._symbol = _symbol;
        this.winflag = false;
    }
    //getters read only the parameters and not set(name and symbol).
    get name() {
        return this._name;
    }
    get symbol() {
        return this._symbol;
    }
}
exports.Player = Player;
