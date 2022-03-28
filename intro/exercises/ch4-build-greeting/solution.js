/* 
Note this solution uses features that are far from introductory!
Feel free to get in touch if you don't yet understand everything here but
would like to :))
*/

const isBetween = (x, y) => (z) => z >= x && z <= y;

const isMorning = isBetween(0, 11);
const isAfternoon = isBetween(12, 16);
const isEvening = isBetween(17, 23);

function buildGreeting(time, name) {
  const greetings = {
    morning: `Good Morning, ${name}!`,
    afternoon: `Good Afternoon, ${name}!`,
    evening: `Good Evening, ${name}!`,
    error: `That's not a real time, ${name}. Maybe you need some sleep!`,
  };

  if (isMorning(time)) return greetings.morning;
  if (isAfternoon(time)) return greetings.afternoon;
  if (isEvening(time)) return greetings.evening;
  else return greetings.error;
}

module.exports = buildGreeting;
