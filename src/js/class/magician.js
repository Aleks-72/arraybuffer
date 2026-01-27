import MathAttack from "./mathAttack";

export default class Magician extends MathAttack {
    

    constructor(name) {
        super(name);
        this.type='Magician'
        this._attack = 10;
        this.defence = 40;
    }
}