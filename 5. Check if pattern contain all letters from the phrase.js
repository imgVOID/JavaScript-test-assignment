/**
 * Here is an error in the 'Dead Beef' test
 */
function hasAllLetters(pattern, phrase) {
  // Only change code below this line
  phrase = phrase.toLowerCase();
  pattern = pattern.toLowerCase();
  var inPhrase = true;
  for (var i in phrase) {
    if (pattern.indexOf(phrase[i]) === -1){
      inPhrase = false;
      break
    }
  }
  return inPhrase;
  // Only change code above this line
}


// Tests
test(hasAllLetters('abcdef', 'Dead Beef'), true, 'Dead Beef');
test(hasAllLetters('abcdef', 'Some phrase'), false, 'Some phrase');
test(hasAllLetters('Happy New Year', 'nyh'), true, 'nyh');


function test(actual, expected, testName = '') {
  if (actual !== expected) {
    const errorMessage = `Test ${testName} failed: ${actual} is not equal to expected ${expected}`;
    console.error(errorMessage);  
  } else {
    console.log(`Test ${testName} passed!`);
  }
}
