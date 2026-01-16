export default function specialAttack(hero) {
    return hero.special.map((attack) => ({
        id: attack.id,
        name: attack.name,
        icon: attack.icon,
        description: attack.description ?? 'Описание недоступно'
    }))
}