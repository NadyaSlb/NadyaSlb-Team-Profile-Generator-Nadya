const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Ann', '1', 'ann@gmail.com', 'annGitHub');
  
    expect(engineer.name).toBe('Ann');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('ann@gmail.com');
    expect(engineer.github).toBe('annGitHub');
  });