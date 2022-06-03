const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Ann', '1', 'ann@gmail.com');
  
    expect(employee.name).toBe('Ann');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('ann@gmail.com');
  });