import Character from "./character";

export default class MathAttack extends Character {
    #stoned = false
    #distance = 1

    constructor(name) {
        super(name)
    }

    get stoned() {
        return this.#stoned
    }

    set stoned(status) {
        if (typeof(status) === 'boolean') {
            this.#stoned = status
        } else {
            throw new Error('Передано некорректное значение: необходимо передать True или False')
        }
    }

    set attack(distance) {
        this.#distance = distance;
    }

    get attack() {
        return Number((this._attack * (1 - 0.1*(this.#distance-1) - (this.#stoned ? Math.log2(this.#distance)*5/100 : 0))).toFixed(2))
    }
}