import Undead from "../undead";

describe('Create Bowerman', () => {
    it('Correct create', () => {
        expect(new Undead('Mike')).toEqual({name: 'Mike', type: 'Undead', health: 100, level: 1, _attack: 25, defence: 25})
    });
    
    it('Small name', () => {
        expect(() => new Undead('M')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });
        
    it('Number name', () => {
        expect(() => new Undead(1)).toThrow(new Error('Имя должно быть строкой'))
    });

    it('Long name', () => {
        expect(() => new Undead('MikeBowerman')).toThrow(new Error('Имя должно быть не менее 2 и не более 10 символов'))
    });
    
    let hero;

    beforeEach(() => {
        hero = new Undead('Mike')
    });

    it('Level up', () => {
        hero.levelUp()
        expect(hero).toEqual({name: 'Mike', type: 'Undead', health: 100, level: 2, _attack: 30, defence: 30})
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
})