import Daemon from "../daemon";
import Bowerman from "../bowerman";
import Magician from "../magician";
import Swordsman from "../swordsman";
import Undead from "../undead";
import Zombie from "../zombie";
import Team from "../team";

const hero1 = new Daemon("Devil");
const hero2 = new Bowerman("Devil");
const hero3 = new Magician("Devil");
const hero4 = new Swordsman("Devil");
const hero5 = new Undead("Devil");
const hero6 = new Zombie("Devil");
const hero7 = {name: "Artur"}


test.each([
    ['add', [hero1,hero2,hero3,hero4,hero5,hero6,hero7], [hero1,hero2,hero3,hero4,hero5,hero6]], 
    ['addAll', [hero1,hero2,hero3,hero4,hero5,hero6,hero7], [hero1,hero2,hero3,hero4,hero5,hero6]]])(('Create team control'),(test, heroes, expected) => {
        const team = new Team;
        let result
        if (test === 'add') {
            for (let hero of heroes) {
                team.add(hero)
            }
            result = team.toArray()           
        } else if (test === 'addAll') {
            team.addAll(...heroes)
            result = team.toArray()
        }
        expect(result.sort()).toEqual(expected.sort())
    })