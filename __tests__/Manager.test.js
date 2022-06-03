const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager('Ann', '1', 'ann@gmail.com', '101');
  
    expect(manager.name).toBe('Ann');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('ann@gmail.com');
    expect(manager.officeNumber).toBe('101');
  });