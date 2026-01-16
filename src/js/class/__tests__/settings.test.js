import Settings from "../settings";

test.each([
    ['add correct custom setting', 'theme', 'gray', 'gray'],
    ['add correct custom setting', 'music', 'rock', 'rock'],
    ['add correct custom setting', 'difficulty', 'hard', 'hard'],
    ['default setting', 'theme', 'gray', 'dark'],
    ['default setting', 'music', 'rock', 'trance'],
    ['default setting', 'difficulty', 'hard', 'easy'],
    ['clear custom setting', 'theme', 'gray', 'dark'],
    ['error setting', 'sound', 'rock', 'Указаный параметр настроек отсутствует'],
    ['error setting', 'theme', 'rock', 'Указаный параметр настроек отсутствует']
])(('Use setting parameters'), (test_name, key, value, expected) => {
    const setting = new Settings
    let result
    if (test_name==='error setting') {
        try {
            setting.setCustom(key, value)
        } catch(e) {
            result = e.message
        }
    } else {
        if (test_name==='add correct custom setting') {
            setting.setCustom(key, value)
        } else if (test_name==='clear custom setting') {
            setting.setCustom(key, value)
            setting.clearCustomSettings()
        } 
        result = setting.settings.get(key)
    }
    expect(result).toBe(expected)
});