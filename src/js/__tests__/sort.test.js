import orderByProps from '../sort';

describe('ordering properties', () => {
    it('sorting object properties', () => {
        const hero = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        }
        expect(orderByProps(hero, ["name", "level"])).toEqual([
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "attack", value: 80},
            {key: "defence", value: 40},
            {key: "health", value: 10}
        ])
    });

    it('sorting object properties with undefined props', () => {
        const hero = {
            name: 'мечник',
            health: 10,
            level: 2,
            attack: 80,
            defence: 40
        }
        expect(orderByProps(hero, ["name", "level", "family"])).toEqual([
            {key: "name", value: "мечник"},
            {key: "level", value: 2},
            {key: "attack", value: 80},
            {key: "defence", value: 40},
            {key: "health", value: 10}
        ])
    })
})