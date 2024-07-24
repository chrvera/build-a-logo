const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle renders correctly', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('<polygon points="150,10 250,190 50,190" fill="blue" />');
  });

  test('Square renders correctly', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="75" y="25" width="150" height="150" fill="green" />');
  });
});