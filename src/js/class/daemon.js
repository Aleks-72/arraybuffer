import MathAttack from "./mathAttack";

export default class Daemon extends MathAttack {
    constructor(name) {
        super(name);
        this.type='Daemon'
        this._attack = 10;
        this.defence = 40;
    }
}