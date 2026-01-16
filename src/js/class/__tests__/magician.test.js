import Magician from "../magician";

describe('Create Magician', () => {
    it('Correct create', () => {
        expect(new Magician('Mike')).toEqual({name: 'Mike', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40})
    });
    
    it('Small name', () => {
        expect(() => new Magician('M')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });
    
    it('Number name', () => {
        expect(() => new Magician(1)).toThrow(new Error('Имя должно быть строкой'))
    });

    it('Long name', () => {
        expect(() => new Magician('MikeSwordsman')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });

    it('Uncorrect type', () => {
        expect(() => new Magician('Mike', 'Magic')).toThrow(new Error('Тип должен быть один из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'))
    });

    let hero;

    beforeEach(() => {
        hero = new Magician('Mike')
    });

    it('Level up', () => {
        hero.levelUp()
        expect(hero).toEqual({name: 'Mike', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48})
    });

    it('Level up error', () => {
        hero.health=0
        expect(() => hero.levelUp()).toThrow(new Error('Ваш персонаж мертв: нельзя повысить уровень умершего'))
    });

    it('Damage', () => {
        hero.damage(25)
        expect(hero.health).toBe(85)
    });

    it('Killing', () => {
        hero.health=5
        hero.damage(25)
        expect(hero.health).toBe(0)
    });

    it('Get attack without stoned', () => {
        hero.setAttack(3)
        expect(hero.getAttack()).toBe(8)
    });

    it('Get attack without stoned', () => {
        hero.setStoned(true)
        hero.setAttack(3)
        expect(hero.getAttack()).toBe(7.21)
    });

    it('Set stoned with Error', () => {
        expect(() => hero.setStoned(1)).toThrow(new Error('Передано некорректное значение: необходимо передать True или False'))
    });

    it('Get  stoned', () => {
        expect(hero.getStoned()).toBe(false)
    });
})