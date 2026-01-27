import Character from "./character";

export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type='Zombie';
        this._attack = 40;
        this.defence = 10;
    }
}