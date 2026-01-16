import Bowerman from "../bowerman";

describe('Create Bowerman', () => {
    it('Correct create', () => {
        expect(new Bowerman('Mike')).toEqual({name: 'Mike', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25})
    });
    
    it('Small name', () => {
        expect(() => new Bowerman('M')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });
        
    it('Number name', () => {
        expect(() => new Bowerman(1)).toThrow(new Error('Имя должно быть строкой'))
    });

    it('Long name', () => {
        expect(() => new Bowerman('MikeBowerman')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });

    it('Uncorrect type', () => {
        expect(() => new Bowerman('Mike', 'Magic')).toThrow(new Error('Тип должен быть один из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'))
    });

    
    let hero;

    beforeEach(() => {
        hero = new Bowerman('Mike')
    });

    it('Level up', () => {
        hero.levelUp()
        expect(hero).toEqual({name: 'Mike', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30})
    });

    it('Level up error', () => {
        hero.health=0
        expect(() => hero.levelUp()).toThrow(new Error('Ваш персонаж мертв: нельзя повысить уровень умершего'))
    });

    it('Damage', () => {
        hero.damage(25)
        expect(hero.health).toBe(81.25)
    });

    it('Killing', () => {
        hero.health=5
        hero.damage(25)
        expect(hero.health).toBe(0)
    });

    it('Get attack without stoned', () => {
        hero.setAttack(3)
        expect(hero.getAttack()).toBe(25)
    });

    it('Get attack with stoned', () => {
        hero.setStoned(true)
        hero.setAttack(3)
        expect(hero.getAttack()).toBe(25)
    });
    
    it('Set stoned with Error', () => {
        expect(() => hero.setStoned(1)).toThrow(new Error('Передано некорректное значение: необходимо передать True или False'))
    });

    it('Get  stoned', () => {
        expect(hero.getStoned()).toBe(false)
    });
})