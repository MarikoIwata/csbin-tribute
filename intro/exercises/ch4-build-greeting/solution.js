/*
This solution uses features that aren't exactly introductory!
Feel free to get in touch if you don't yet understand everything here but
would like to :))
*/

const isBetween = (x, y) => z => z >= x && z <= y;
const isMorning = isBetween(0, 11);
const isAfternoon = isBetween(12, 16);
const isEvening = isBetween(17, 23);

const greeter = name => greeting => `Good ${greeting}, ${name}!`;

function buildGreeting(time, name) {
  const greeting = greeter(name);

  if (isMorning(time)) return greeting('Morning');
  if (isAfternoon(time)) return greeting('Afternoon');
  if (isEvening(time)) return greeting('Evening');
  else return `That's not a real time, ${name}. Maybe you need some sleep!`;
}

module.exports = buildGreeting;
