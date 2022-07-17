const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Maximus', '3');
    expect(engineer.github()).toEqual(engineer.engineerGithub);
    expect(engineer.getId()).toEqual(engineer.engineerId);
    expect(engineer.role()).toBe(Engineer);
})