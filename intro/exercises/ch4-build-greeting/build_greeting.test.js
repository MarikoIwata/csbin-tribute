let buildGreeting;
buildGreeting = require('./build_greeting');
// buildGreeting = require('./solution'); // uncomment to test solution file

describe('buildGreeting() challenge', () => {
  test('should return appropriate greeting based on passed-in arguments', () => {
    expect(buildGreeting(8, 'Maggie')).toBe('Good Morning, Maggie!');
    expect(buildGreeting(12, 'John')).toBe('Good Afternoon, John!');
    expect(buildGreeting(22, 'Stacey')).toBe('Good Evening, Stacey!');
    expect(buildGreeting(31, 'Derrick')).toBe(
      "That's not a real time, Derrick. Maybe you need some sleep!"
    );
  });
});
