const fs = require('fs');
const path = require('path');

// would obvs need to be manually edited for different challenge sets
// const challenges = [
//   { challenge: 'countdown', params: ['n'] },
//   { challenge: 'sum', params: ['array'] },
//   { challenge: 'palindrome', params: ['string'] },
//   { challenge: 'is-prime', params: ['num'] },
//   { challenge: 'path-finder', params: ['obj', 'arr'] },
//   { challenge: 'flatten-recursively', params: ['arr'] },
//   { challenge: 'find-in-ordered-set', params: ['arr', 'target'] },
//   { challenge: 'ways-to-reach-nth-stair', params: ['n'] },
//   { challenge: 'get-permutations', params: ['arr'] },
//   { challenge: 'get-range-between', params: ['x', 'y'] },
// ];

const challenges = [
  { challenge: 'date-stamp', params: ['func'] },
  { challenge: 'censor', params: [] },
  { challenge: 'create-secret-holder', params: ['secret'] },
  { challenge: 'call-times', params: [] },
  { challenge: 'russian-roulette', params: ['obj', 'arr'] },
  { challenge: 'average', params: [] },
  { challenge: 'make-func-tester', params: ['arrOfTests'] },
  { challenge: 'make-history', params: ['limit'] },
  { challenge: 'blackjack', params: ['array'] },
];

function initializeChallenges(topic, challenges) {
  const topicPath = path.join(__filename, '..', '..', topic, 'exercises');

  challenges.forEach(({ challenge: challengeDir, params }, index) => {
    const challengePath = `${topicPath}/ch${index + 12}-${challengeDir}`;
    fs.mkdirSync(challengePath);

    const baseFileName = dirToFileName(challengeDir);
    const fileNames = [
      `${baseFileName}.js`,
      `${baseFileName}.test.js`,
      'solution.js',
    ];

    fileNames.forEach((fileName) => {
      const filePath = `${challengePath}/${fileName}`;
      const funcName = dirToFuncName(challengeDir);
      let fileContents = '';

      if (!fileName.includes('.test.')) {
        if (!fileName.includes('solution')) {
          fileContents += starterInstructions(baseFileName, index);
        }
        fileContents += `function ${funcName}(${params}) {}\n\nmodule.exports = ${funcName};`;
      } else {
        fileContents += `let ${funcName};\n${funcName} = require('./${baseFileName}');\n//${funcName} = require('./${fileNames
          .at(-1)
          .slice(0, -3)}'); // uncomment to test solution file\n\n${testStarter(
          funcName,
          params
        )}  `;
      }

      fs.writeFileSync(filePath, fileContents);
    });
  });
}

//  ********************************* helper functions

function dirToFileName(dirName) {
  return dirName.replaceAll('-', '_');
}

function dirToFuncName(dirName) {
  const words = dirName.split('-');
  const firstWord = words[0];
  const titleCasedWords = words
    .slice(1)
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);

  return firstWord + titleCasedWords.join('');
}

function testStarter(funcName, params) {
  return `describe('${funcName}(${params})', () => {\n\ttest('should ', () => {});\n});`;
}

function starterInstructions(test, index) {
  return `/*\nChallenge ${
    index + 12
  }\n\nTo test your solution run\nnpm t ${test}\nfrom the command line\n\n*/\n\n`;
}

//  ********************************* script execution site

// initializeChallenges('closures', challenges);
