import Character from "./character";

export default class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.type= 'Bowman';
        this._attack = 25;
        this.defence = 25;
    }
}