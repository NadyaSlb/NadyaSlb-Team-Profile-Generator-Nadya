const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Ann', '1', 'ann@gmail.com', 'bestschool');
  
    expect(intern.name).toBe('Ann');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('ann@gmail.com');
    expect(intern.school).toBe('bestschool');
  });