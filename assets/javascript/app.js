//Variables
var time = 16;
var intervalId;
var correctGuess = 0;
var wrongGuess = 0;
var questionNumber = 0;
var timeRunning = false;
//Trivia question objects//
var trivia = {
  questions: [{
      question: "Which player has won the most NBA championships?",
      answer: "Bill Russell",
      explanation: "Bill Russell has won the most NBA championships with total of 16 championship wins playing for the Boston Celtics",
      multipleChoice: ["Bill Russell", "Michael Jordan", "Tim Duncan", "Kobe Bryant"]
    },
    {
      question: "Which NBA team has won the most NBA championships?",
      answer: "Boston Celtics",
      explanation: "Boston Celtics have won the NBA championships 17 times. Los Angeles Lakers are right behind the Celtics with 16 wins.",
      multipleChoice: ["Los Angeles Lakers", "Indiana Pacers", "Boston Celtics", "Golden State Warriors"]
    },
    {
      question: "Who is the NBA's all-time scoring leader?",
      answer: "Kareem Abdul-Jabbar",
      explanation: "The NBA's top scorer is Kareem Abdul-Jabbar, with 38,387 points. Karl Malone, Kobe Bryant and Michael Jordan are 2nd, 3rd, and 4th all-time scorers in the league.",
      multipleChoice: ["Lebron James", "Michael Jordan", "Kobe Bryant", "Kareem Abdul-Jabbar"]
    },
    {
      question: "What is Kobe Bryant's career high score?",
      answer: "81 Points",
      explanation: "In 2006, Bryant scored a career-high 81 points against the Toronto Raptors. It was the second-highest number of points scored in a game in NBA history, behind only Chamberlain's 100-point performance in 1962.",
      multipleChoice: ["69 Points", "73 Points", "85 Points", "81 Points"]
    },
    {
      question: "Which player was the NBA 2017 finals MVP?",
      answer: "Kevin Durant",
      explanation: "Kevin Durant was named the 2017 NBA Finals MVP following the Warriors’ Game 5 elimination victory over the Cleveland Cavaliers. Durant capped off the series with a 39-point performance to lead the Warriors to a 129-120 win.",
      multipleChoice: ["Stephen Curry", "Kevin Durant", "Klay Thompson", "Andre Igoudala"]
    },
    {
      question: "In the 2010 NBA Finals, the Lakers beat the Celtics in which game?",
      explanation: "This game was the first Game 7 in an NBA Finals since 2005 five years earlier. Los Angeles Lakers beat the Celtics 83 to 79 and won their 16th NBA championship title.",
      answer: "Game 7",
      multipleChoice: ["Game 5", "Game 4", "Game 7", "Game 6"]
    },
  ]
};
//Function that displays the result at the end//
function displayResults() {
  $("#display").hide();
  $("#displayResult").show();
  $("#wins").html("Total number of correct guesses: " + correctGuess);
  $("#losses").html("Total number of incorrect guesses: " + wrongGuess);
  $("#replay").fadeIn();
}
//Function that reloads the game back to the first question//
function startGame() {
  questionNumber = 0;
  correctGuess = 0;
  wrongGuess = 0;
  askQuestion(questionNumber);
  $("#time-left").show();
  $("#question").show();
  $("#choices").show();
  $("#start").fadeOut();
  $("#replay").fadeOut();
}
//Timer that counts down to 0//
function timer() {
  time--;
  $("#time-left").html("<h5>Time Left: " + time + " seconds</h5>");
  if (time === 0) {
    clearInterval(intervalId);
    questionNumber++;
    wrongGuess++;
    askQuestion(questionNumber);
  } else {
    intervalId = setTimeout(timer, 1000);
  }
}
//Function that generates questions from the trivia object. questionNumber parameter represents the number of questions in the array.//
function askQuestion(questionNumber) {
  //Sets the timer to 15 seconds on every new questions//
  time = 16;
  if (questionNumber < trivia.questions.length) {
    $("#question").html("<h3>" + trivia.questions[questionNumber].question + "</h3>");
    $(".choice-1").html(trivia.questions[questionNumber].multipleChoice[0]);
    $(".choice-2").html(trivia.questions[questionNumber].multipleChoice[1]);
    $(".choice-3").html(trivia.questions[questionNumber].multipleChoice[2]);
    $(".choice-4").html(trivia.questions[questionNumber].multipleChoice[3]);
  } else if (questionNumber === trivia.questions.length) {
    $("#time-left").hide();
    $("#question").hide();
    $("#choices").hide();
    $("#rightOrWrong").hide();
    $("#explain").hide();
    clearInterval(intervalId);
    displayResults();
  }
}
//Function that checks to see if the answer clicked is the right answer//
function checkAnswer(guess) {
  if (guess === trivia.questions[questionNumber].answer) {
    return true;
  } else {
    return false;
  }
}
//Function that shows the explanation of the answer in-between each questions//
function explanation() {
  $("#display").hide();
  $("#rightOrWrong").show();
  $("#explain").show();
  $("#explain").html(trivia.questions[questionNumber].explanation);
  questionNumber++;
}

$(document).ready(function() {
  $("#replay").hide();
  $("#next").hide();
  $("#start").on("click", function() {
    timer();
    startGame();
  });
  $(".answer-choices").on("click", function() {
    if (checkAnswer($(this).html()) === true) {
      $("#rightOrWrong").html("<h3>"+ "You Are Correct!" +"</h3>");
      correctGuess++;
      explanation();
      setTimeout(function() {
        askQuestion(questionNumber);
        $("#display").show();
        $("#rightOrWrong").hide();
        $("#explain").hide();
      },5000);
    } else if (checkAnswer($(this).html()) === false) {
      $("#rightOrWrong").html("<h3>"+ "You Are Wrong!" +"</h3>");
      wrongGuess++;
      explanation();
      setTimeout(function() {
        askQuestion(questionNumber);
        $("#display").show();
        $("#rightOrWrong").hide();
        $("#explain").hide();
      },5000);
    }
  });
  $("#replay").on("click", function() {
    startGame();
    timer();
    $("#displayResult").hide();
  });
});
