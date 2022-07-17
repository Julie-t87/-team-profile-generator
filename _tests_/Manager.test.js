
const Manager = require('../lib/Manager');

test('This makes a Manager object', () => {
    const manager = new Manager('Maxine', '1', '1');
    expect(manager.officeNumber()).toEqual(manager.managerOffice);
    expect(manager.getId()).toEqual(manager.managerId);
    expect(manager.role()).toBe(Manager);
})