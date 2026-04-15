const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

test('capitalizeWords works', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('filterActiveUsers works', () => {
  const users = [
    { name: 'Alice', isActive: true },
    { name: 'Bob', isActive: false }
  ];

  expect(filterActiveUsers(users)).toEqual([
    { name: 'Alice', isActive: true }
  ]);
});

test('logAction works', () => {
  const result = logAction('login', 'Alice');
  expect(result).toContain('User Alice performed login');
});