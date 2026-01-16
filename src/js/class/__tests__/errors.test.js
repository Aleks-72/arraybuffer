import ErrorRepository from "../errors";

test.each([
    ['Error 1', 100, 'Ошибка выполнения операции #100: данное значение не найдено'],
    ['Unknown error', 999,'Unknown error'],
]) (('Get error'), (test_name, key, expected) => {
    const errors = new ErrorRepository;
    errors.addError(100, 'Ошибка выполнения операции #100: данное значение не найдено')
    errors.addError(101, 'Ошибка выполнения операции #101: неверно указаны входные данные')
    expect(errors.getError(key)).toBe(expected)
})