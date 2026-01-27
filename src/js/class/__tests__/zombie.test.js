import Zombie from "../zombie";

describe('Create Swordsman', () => {
    it('Correct create', () => {
        expect(new Zombie('Mike')).toEqual({name: 'Mike', type: 'Zombie', health: 100, level: 1, _attack: 40, defence: 10})
    });
    
    it('Small name', () => {
        expect(() => new Zombie('M')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });
    
    it('Number name', () => {
        expect(() => new Zombie(1)).toThrow(new Error('Имя должно быть строкой'))
    });

    it('Long name', () => {
        expect(() => new Zombie('MikeSwordsman')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });
    
    let hero;

    beforeEach(() => {
        hero = new Zombie('Mike')
    });

    it('Level up', () => {
        hero.levelUp()
        expect(hero).toEqual({name: 'Mike', type: 'Zombie', health: 100, level: 2, _attack: 48, defence: 12})
    });

    it('Level up error', () => {
        hero.health=0
        expect(() => hero.levelUp()).toThrow(new Error('Ваш персонаж мертв: нельзя повысить уровень умершего'))
    });

    it('Damage', () => {
        hero.damage(25)
        expect(hero.health).toBe(77.5)
    });

    it('Killing', () => {
        hero.health=5
        hero.damage(25)
        expect(hero.health).toBe(0)
    });
})