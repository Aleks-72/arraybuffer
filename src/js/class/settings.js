export default class Settings {
    #defaults = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy'],
    ])

    #customs = new Map()

    #keySetting = {'theme':['dark', 'light', 'gray'],
        'music':['trance', 'pop', 'rock', 'chillout', 'off'],
        'difficulty':['easy', 'normal', 'hard', 'nightmare']}

    setCustom(key, value) {
        if (this.#keySetting[key]?.includes(value)) {
            this.#customs.set(key, value)
        } else {
            throw new Error('Указаный параметр настроек отсутствует')
        }
    }

    clearCustomSettings() {
        this.#customs.clear();
    }

    get settings() {
        const resultSettings = new Map(this.#defaults)
        this.#customs.forEach((value, key) => {
            resultSettings.set(key, value)
        })
        return resultSettings
    }
}