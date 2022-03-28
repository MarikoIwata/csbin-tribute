/* ========== *
 * Challenge 6 *

 Create a function letterExists that takes a word (string) and a character (string), 
 returns true/false depending on whether that letter can be found inside that word.

 To test your solution run
 npm t letter_exists
 from the command line
 
 * =========== */

function letterExists(word, letter) {
  return word.includes(letter);
}

module.exports = letterExists;
