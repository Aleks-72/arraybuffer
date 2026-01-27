export default class Character {
    constructor(name) {
        if (typeof name !== 'string') {
            throw new Error('Имя должно быть строкой')
        }
        if (name.length<2 || name.length>10) {
            throw new Error('Имя должно быть не менее 2 и не более 10 символов')
        }
        this.name=name
        this.health=100
        this.level=1
    }

    levelUp() {
        if (this.health>0) {
            this.level += 1
            this._attack *= 1.2
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
}