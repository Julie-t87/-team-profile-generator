const Employee = require('../lib/Employee')

test('creates an Employee object',() => {
    const employee = new Employee('Max');
    expect(employee.empName).toBe('Max');
    expect(employee.getEmail()).toEqual(employee.email);
})