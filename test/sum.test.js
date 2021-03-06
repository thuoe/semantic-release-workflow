const { sum, subtract, multiply } = require('../index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 3 - 1 to equal 2', () => {
    expect(subtract(3, 1)).toBe(2);
});

test('multiply 5 * 2 equal 10', () => {
    expect(multiply(5, 2)).toBe(10);
});