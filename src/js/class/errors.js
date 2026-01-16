export default class ErrorRepository {
    #errors = new Map
    
    addError(key, value) {
        this.#errors.set(key, value)
    }

    getError(key) {
        if (this.#errors.has(key)) {
            return this.#errors.get(key)
        } else {
            return 'Unknown error'
        }
    }
}