const fs = require('fs');
const path = require('path');
const challenges = require('../challenge_meta_data');

//  ********************************* warning: script execution site

// const scriptArg = {};
// initializeChallenges(scriptArg);

//  *********************************

/**
 * Script to generate directory of challenges
 * Each challenge initialised with its own directory containing three files
 * e.g. challenge_name.js challenge_name.test.js solution.js
 * Each file also gets populated with some starter code – see helper functions below
 * @param {Object} obj - destructured to mimic named arguments
 * @param {string} obj.topic - the topic the challenges relate to e.g. 'recursion'
 * @param {Array.<{challenge: string, params: Array.<string>}>} obj.challenges - where the challenge meta-data lives
 * @param {boolean} [obj.extensions=false] - flag for whether challenges belong in extensions directory

 */
function initializeChallenges({ topic, challenges, extensions = false }) {
  const topicPath = path.join(
    __filename,
    '..',
    '..',
    extensions ? 'extensions' : '',
    topic,
    'exercises'
  );

  challenges.forEach(({ challenge: challengeDir, params }, index) => {
    const challengePath = `${topicPath}/ch${index + 1}-${challengeDir}`;
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
    index + 1
  }\n\nTo test your solution run\nnpm t ${test}\nfrom the command line\n\n*/\n\n`;
}
