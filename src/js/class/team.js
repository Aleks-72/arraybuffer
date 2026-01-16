import Character from "./character";

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(hero) {
        if (hero instanceof Character) {
            this.members.add(hero)
        }
    }

    addAll(...heroes){
        for (let hero of heroes) {
            this.add(hero)
        }
    }

    toArray() {
        return [...this.members]
    }
}