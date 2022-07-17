const Intern = require('../lib/Intern');

test('This makes and intern object', () => {
    const intern = new Intern('Maxwell', 'Utah', '12');
    expect(intern.school()).toEqual(intern.intSchool);
    expect(intern.role()).toBe(Intern);
    expect(intern.getId()).toEqual(intern.internId);
})