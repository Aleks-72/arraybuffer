export default class Character {
    #activeAttack = this.attack
    #stoned = false

    constructor(name, type) {
        if (typeof name !== 'string') {
            throw new Error('Имя должно быть строкой')
        }
        if (name.length<2 || name.length>10) {
            throw new Error('Имя должно быть не менее 2 и не более 10 символов')
        }

        this.name=name
        this.type=type
        this.health=100
        this.level=1
        switch (type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            default:
                throw new Error('Тип должен быть один из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }  
    }

    levelUp() {
        if (this.health>0) {
            this.level += 1
            this.attack *= 1.2
            this.defence *= 1.2
            this.health = 100
        } else {
            throw new Error('Ваш персонаж мертв: нельзя повысить уровень умершего')
        }
    }

    damage(points) {
        if (this.health - points*(1-this.defence/100) >= 0) {
            this.health -= points*(1-this.defence/100)
        } else {
            this.health = 0
        }
    }

    getStoned() {
        return this.#stoned
    }

    setStoned(status) {
        if (status === false || status === true) {
            this.#stoned = status
        } else {
            throw new Error ('Передано некорректное значение: необходимо передать True или False')
        }
    }

    setAttack(distance) {
        if (this.type === 'Magician' || this.type === 'Daemon') {
            this.#activeAttack = Number((this.attack * (1 - 0.1*(distance-1) - (this.#stoned ? Math.log2(distance)*5/100 : 0))).toFixed(2))
        } else {
            this.#activeAttack=this.attack
        }
    }

    getAttack() {
        return this.#activeAttack
    }
}