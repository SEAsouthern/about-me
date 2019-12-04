'use strict';

var nameOfTheUser = prompt('What is your name?');
console.log('The user said their username was ' + nameOfTheUser);

if (window.location.pathname.endsWith (index.html)) {
alert('Hello, ' + nameOfTheUser + '! I hope you enjoy learning a little bit about me!');
}

if (window.location.pathname.endsWith (quiz.html)) {
alert('Hello, ' + nameOfTheUser + '! Good luck on the quiz!');

var quizState = prompt('Is Matthew from South Dakota, Yes or No?');
console.log('user\'s answer was ' + quizState);
var lowerCaseQuizState = quizState.toLowerCase();
if(lowerCaseQuizState === 'no' || lowerCaseQuizState === 'n') {
  alert('Correct, Matthew is from south Alabama, not South Dakota.');
} else if(lowerCaseQuizState === 'yes' || lowerCaseQuizState === 'y') {
  alert('Negative, Matthew is from south Alabama, not South Dakota.');
} else {
  alert('Your answer must be either a yes or no or a Y or N.');
}

var quizHood = prompt('Does Matthew live in Columbia City, Yes or No?');
console.log('user\'s answer was ' + quizHood);
var lowerCaseQuizHood = quizHood.toLowerCase();
if(lowerCaseQuizHood === 'no') {
  alert('Negative, Matthew lives in Columbia City.');
} else if(lowerCaseQuizHood === 'yes') {
  alert('Correct, Matthew lives in Columbia City.');
} else {
  alert('Your answer must be a yes or no.');
}

var quizBS = prompt('Does Matthew have a Bachelor of Science in Engineering, Yes or No?');
console.log('user\'s answer was ' + quizBS);
var lowerCaseQuizBS = quizBS.toLowerCase();
if(lowerCaseQuizBS === 'no') {
  alert('Correct, Matthew has a BS in International Studies.');
} else if(lowerCaseQuizBS === 'yes') {
  alert('Negative, Matthew has a BS in International Studies.');
} else {
  alert('Your answer must be a yes or no.');
}

var quizCode = prompt('Is Matthew in school at Code Fellows, Yes or No?');
console.log('user\'s answer was ' + quizCode);
var lowerCaseQuizCode = quizCode.toLowerCase();
if(lowerCaseQuizCode === 'no') {
  alert('Negative, Matthew is in school at Code Fellows.');
} else if(lowerCaseQuizCode === 'yes') {
  alert('Correct, Matthew is in school at Code Fellows.');
} else {
  alert('Your answer must be a yes or no.');
}

var quizJob = prompt('Does Matthew want to work at Blue Origin, Yes or No?');
console.log('user\'s answer was ' + quizJob);
var lowerCaseQuizJob = quizJob.toLowerCase();
if(lowerCaseQuizJob === 'yes') {
  alert('Correct, Matthew wants to work at Blue Origin.');
} else if(lowerCaseQuizJob === 'no') {
  alert('Negative, Matthew does want to work at Blue Origin.');
} else {
  alert('Your answer must be a yes or no.');
}}