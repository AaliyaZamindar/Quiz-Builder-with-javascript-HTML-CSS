function removeFunction(event) {
  event.preventDefault();
  const divIdContents = document.getElementById("contents");
  const question1Div = document.getElementById("question1");
  question1Div.classList.remove("hiddenClass");
  question1Div.classList.add("showClass");
  divIdContents.classList.add("hiddenClass");
}
var scoreButton = document.getElementById("scorebutton");
var score = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
function submitAnswer1Function(event) {
  event.preventDefault();
  var correctAnswer = "object oriented";

  var selected = document.querySelector(
    "input[type=radio][name=answer1]:checked"
  ).value;

  console.log(selected);

  if (selected == correctAnswer) {
    score1 = score + 1;
    console.log(score1);
  } else {
    score1 = score;
    console.log(score1);
  }
  console.log("your score is:" + " " + score1);
  const question2Div = document.getElementById("question2");
  const question1Div = document.getElementById("question1");
  question1Div.classList.remove("showClass");
  question2Div.classList.add("showClass");
  question1Div.classList.add("hiddenClass");
}
function submitAnswer2Function(event) {
  event.preventDefault();
  var correctAnswer = "data types";

  var selected = document.querySelector(
    "input[type=radio][name=answer2]:checked"
  ).value;

  console.log(selected);

  if (selected == correctAnswer) {
    score2 = score + 1;
    console.log(score2);
  } else {
    score2 = score;
    console.log(score2);
  }
  console.log("your score is:" + " " + score2);
  const question2Div = document.getElementById("question2");
  const question3Div = document.getElementById("question3");
  question2Div.classList.remove("showClass");
  question3Div.classList.add("showClass");
  question2Div.classList.add("hiddenClass");
}
function submitAnswer3Function(event) {
  event.preventDefault();
  var correctAnswer = "both conditional block and a single statement";

  var selected = document.querySelector(
    "input[type=radio][name=answer3]:checked"
  ).value;

  console.log(selected);

  if (selected == correctAnswer) {
    score3 = score + 1;
    console.log(score3);
  } else {
    score3 = score;
    console.log(score3);
  }
  console.log("your score is:" + " " + score3);
  const question3Div = document.getElementById("question3");
  const question4Div = document.getElementById("question4");
  question3Div.classList.remove("showClass");
  question4Div.classList.add("showClass");
  question3Div.classList.add("hiddenClass");
}
function submitAnswer4Function(event) {
  event.preventDefault();
  var correctAnswer = "Throws an error";
  var selected = document.querySelector(
    "input[type=radio][name=answer4]:checked"
  ).value;

  console.log(selected);

  if (selected == correctAnswer) {
    score4 = score + 1;
    console.log(score4);
  } else {
    score4 = score;
    console.log(score4);
  }
  console.log("your score is:" + " " + score4);
  const resultdiv = document.getElementById("result");
  const question4Div = document.getElementById("question4");

  question4Div.classList.remove("showClass");
  resultdiv.classList.add("showClass");
  question4Div.classList.add("hiddenClass");
}
function scoreFunction(event) {
  event.preventDefault();
  const resultdiv = document.getElementById("result");
  var AddScore = score1 + score2 + score3 + score4;
  var scoreTotal = "Total Score is :" + " " + AddScore;
  console.log("your score is:" + " " + AddScore);
  resultdiv.innerHTML = scoreTotal;
}
