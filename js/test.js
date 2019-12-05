'use strict';

var nameOfTheUser = prompt('What is your name?');
console.log('The user said their username was ' + nameOfTheUser);

if (window.location.pathname.endsWith('index.html')) {
  alert('Hello, ' + nameOfTheUser + '! I hope you enjoy learning a little bit about me!');
}


if (window.location.pathname.endsWith ('quiz.html')) {
  alert('Hello, ' + nameOfTheUser + '! Good luck on the quiz!');

  var score = 0

  var quizState = prompt('Is Matthew from South Dakota, Yes or No?');
  console.log('user\'s answer was ' + quizState);
  var lowerCaseQuizState = quizState.toLowerCase();
  if(lowerCaseQuizState === 'no' || lowerCaseQuizState === 'n') {
    alert('Correct, Matthew is from south Alabama, not South Dakota.');
    score++;
  } else if(lowerCaseQuizState === 'yes' || lowerCaseQuizState === 'y') {
    alert('Negative, Matthew is from south Alabama, not South Dakota.');
  } else {
    alert('Your answer must be either a yes or no or a Y or N.');
  }

  var quizHood = prompt('Does Matthew live in Columbia City, Yes or No?');
  console.log('user\'s answer was ' + quizHood);
  var lowerCaseQuizHood = quizHood.toLowerCase();
  if(lowerCaseQuizHood === 'no'|| lowerCaseQuizHood === 'n') {
    alert('Negative, Matthew lives in Columbia City.');
  } else if(lowerCaseQuizHood === 'yes'|| lowerCaseQuizHood === 'y') {
    alert('Correct, Matthew lives in Columbia City.');
    score++;
  } else {
    alert('Your answer must be a yes or no.');
  }

  var quizBS = prompt('Does Matthew have a Bachelor of Science in Engineering, Yes or No?');
  console.log('user\'s answer was ' + quizBS);
  var lowerCaseQuizBS = quizBS.toLowerCase();
  if(lowerCaseQuizBS === 'no'|| lowerCaseQuizBS === 'n') {
    alert('Correct, Matthew has a BS in International Studies.');
    score++;
  } else if(lowerCaseQuizBS === 'yes'|| lowerCaseQuizBS === 'y') {
    alert('Negative, Matthew has a BS in International Studies.');
  } else {
    alert('Your answer must be a yes or no.');
  }

  var quizCode = prompt('Is Matthew in school at Code Fellows, Yes or No?');
  console.log('user\'s answer was ' + quizCode);
  var lowerCaseQuizCode = quizCode.toLowerCase();
  if(lowerCaseQuizCode === 'no'|| lowerCaseQuizCode === 'n') {
    alert('Negative, Matthew is in school at Code Fellows.');
  } else if(lowerCaseQuizCode === 'yes'|| lowerCaseQuizCode === 'y') {
    alert('Correct, Matthew is in school at Code Fellows.');
    score++;
  } else {
    alert('Your answer must be a yes or no.');
  }

  var quizJob = prompt('Does Matthew want to work at Blue Origin, Yes or No?');
  console.log('user\'s answer was ' + quizJob);
  var lowerCaseQuizJob = quizJob.toLowerCase();
  if(lowerCaseQuizJob === 'yes'|| lowerCaseQuizJob === 'y') {
    alert('Correct, Matthew wants to work at Blue Origin.');
    score++;
  } else if(lowerCaseQuizJob === 'no'|| lowerCaseQuizJob === 'n') {
    alert('Negative, Matthew does want to work at Blue Origin.');
  } else {
    alert('Your answer must be a yes or no.');
  }

  var quizYear;
  var times = 4;
  for(var i=0; i < times; i++){
    quizYear = prompt('What year, expressed as a four digit number, did Matthew move to Columbia City?');
    console.log('user\'s answer was ' + quizYear);
    if(quizYear === '2012') {
      alert('Correct, Matthew moved to Columbia City in 2012');
      i = i + 3;
      score++;
    } else if(quizYear < 2012) {
      alert('No, he moved to Columbia City after that, try again.');
    } else if(quizYear > 2012) {
      alert('No, he moved to Columbia City before then, try again.');
    }
  }

  var quizSchoolAnswers = ['Spring Hill','Spring Hill College','Psychological Operations','Psychological Operations Qualifications Course','Psycological Operations Non-Commissioned Officers course'];
  var quizSchool;
  var times2 = 6;
  for(var i=0; i < times2; i++){
    quizSchool = prompt('What schools has Matthew attended?');
    console.log('user\s answer was ' + quizSchool);
    if(quizSchoolAnswers.includes(quizSchool)) {
      alert('Correct!');
      i = i + 5;
      score++;
    } else {
      alert('Incorrect');
    }
  }
  alert('Congrats! You scored a ' + score + '/7.');
}
