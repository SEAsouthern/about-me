'use strict'

var nameOfTheUser = prompt('What is your name?');
console.log('The user said their username was ' + nameOfTheUser);
alert('Hello, ' + nameOfTheUser + '! Good luck on the quiz!');

var quizState = prompt('Is Matthew from South Dakota, Yes or No?');
console.log('user\'s answer was ' + quizState);
var lowerCasequizState = quizState.toLowerCase();
if(lowerCasequizState === 'no') {
  alert('Correct, Matthew is from south Alabama, not South Dakota.');
} else if(lowerCasequizState === 'yes') {
  alert('Negative, Matthew is from south Alabama, not South Dakota.');
} else {
    alert('Your answer must be a yes or no.')
}

var quizHood = prompt('Does Matthew live in Columbia City, Yes or No?');
console.log('user\'s answer was ' + quizHood);
var lowerCasequizHood = quizHood.toLowerCase();
if(lowerCasequizHood === 'no') {
  alert('Negative, Matthew lives in Columbia City.');
} else if(lowerCasequizHood === 'yes') {
  alert('Correct, Matthew lives in Columbia City.');
} else {
    alert('Your answer must be a yes or no.')
}

var quizBS = prompt('Does Matthew have a Bachelor of Science in Engineering, Yes or No?');
console.log('user\'s answer was ' + quizBS);
var lowerCasequizBS = quizBS.toLowerCase();
if(lowerCasequizBS === 'no') {
  alert('Correct, Matthew has a BS in International Studies.');
} else if(lowerCasequizBS === 'yes') {
  alert('Negative, Matthew has a BS in International Studies.');
} else {
    alert('Your answer must be a yes or no.')
}

var quizCode = prompt('Is Matthew in school at Code Fellows, Yes or No?');
console.log('user\'s answer was ' + quizCode);
var lowerCasequizCode = quizCode.toLowerCase();
if(lowerCasequizCode === 'no') {
  alert('Negative, Matthew is in school at Code Fellows.');
} else if(lowerCasequizCode === 'yes') {
  alert('Correct, Matthew is in school at Code Fellows.');
} else {
    alert('Your answer must be a yes or no.')
}

var quizJob = prompt('Does Matthew want to work at Blue Origin, Yes or No?');
console.log('user\'s answer was ' + quizJob);
var lowerCasequizJob = quizJob.toLowerCase();
if(lowerCasequizJob === 'yes') {
  alert('Correct, Matthew wants to work at Blue Origin.');
} else if(lowerCasequizJob === 'no') {
  alert('Negative, Matthew does want to work at Blue Origin.');
} else {
    alert('Your answer must be a yes or no.')
}