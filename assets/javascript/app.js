//Variables
var time = 2;
var intervalId;
var timeRunning = false;

//Functions//
function showDisplay() {
  $("#time-left").fadeIn();
  $("#question").fadeIn();
  $("#choices").fadeIn();
}

function hideButtons() {
  $("#next").hide();
  $("#next2").hide();
  $("#next3").hide();
  $("#next4").hide();
  $("#next5").hide();
  $("#result").hide();
}

function displayExplanation() {
  $("#time-left").hide();
  $("#question").hide();
  $("#choices").hide();
  $("#rightOrWrong").show();
  $("#explain").show();
}

function timer() {
  time--;
  $("#time-left").html("Time Left: " + time);
  intervalId = setTimeout(timer, 1000);
}

//Functions that generate questions & answers//
//First question & answer explanation//
function firstQuestion() {
  $("#question").html("What is the first question?");
  $(".choice-1").html("1. Correct answer");
  $(".choice-2").html("2. Wrong answer");
  $(".choice-3").html("3. Wrong answer");
  $(".choice-4").html("4. Wrong answer");
  $(".answer-choices").on("click", function() {
    if (($(this).attr("value") === "1")) {
      $("#rightOrWrong").html("You are correct!");
      explainAnswer1();
    } else if (time === 0) {
      clearInterval(intervalId);
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer1();
    } else {
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer1();
    }
  });
}

function explainAnswer1() {
  clearInterval(intervalId);
  displayExplanation();
  $("#explain").html("The answer is one because blah blah blah");

  function nextButton() {
    $("#next").fadeIn();
  }
  setTimeout(nextButton, 3000);
}

//Second question & answer explanation//
function secondQuestion() {
  $("#question").html("What is the second question?");
  $(".choice-1").html("1. Wrong answer");
  $(".choice-2").html("2. Wrong answer");
  $(".choice-3").html("3. Correct answer");
  $(".choice-4").html("4. Wrong answer");
  $(".answer-choices").on("click", function() {
    if (($(this).attr("value") === "3")) {
      $("#rightOrWrong").html("You are correct!");
      explainAnswer2();
    } else {
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer2();
    }
  });
}

function explainAnswer2() {
  clearInterval(intervalId);
  displayExplanation();
  $("#explain").html("The answer is three because blah blah blah");

  function nextButton2() {
    $("#next2").fadeIn();
    $("#next").hide();
  }
  setTimeout(nextButton2, 3000);
}

//Third question & answer explanation//
function thirdQuestion() {
  $("#question").html("What is the third question?");
  $(".choice-1").html("1. Wrong answer");
  $(".choice-2").html("2. Wrong answer");
  $(".choice-3").html("3. Wrong answer");
  $(".choice-4").html("4. Correct answer");
  $(".answer-choices").on("click", function() {
    if (($(this).attr("value") === "4")) {
      $("#rightOrWrong").html("You are correct!");
      explainAnswer3();
    } else {
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer3();
    }
  });
}

function explainAnswer3() {
  clearInterval(intervalId);
  displayExplanation();
  $("#explain").html("The answer is four because blah blah blah");

  function nextButton3() {
    $("#next3").fadeIn();
    $("#next2").hide();
  }
  setTimeout(nextButton3, 3000);
}

//Fourth question & answer explanation//
function fourthQuestion() {
  $("#question").html("What is the fourth question?");
  $(".choice-1").html("1. Wrong answer");
  $(".choice-2").html("2. Correct answer");
  $(".choice-3").html("3. Wrong answer");
  $(".choice-4").html("4. Wrong answer");
  $(".answer-choices").on("click", function() {
    if (($(this).attr("value") === "2")) {
      $("#rightOrWrong").html("You are correct!");
      explainAnswer4();
    } else {
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer4();
    }
  });
}

function explainAnswer4() {
  clearInterval(intervalId);
  displayExplanation();
  $("#explain").html("The answer is two because blah blah blah");

  function nextButton4() {
    $("#next4").show();
    $("#next3").hide();
  }
  setTimeout(nextButton4, 3000);
}

//Fifth question & answer explanation//
function fifthQuestion() {
  $("#question").html("What is the fifth question?");
  $(".choice-1").html("1. Wrong answer");
  $(".choice-2").html("2. Wrong");
  $(".choice-3").html("3. Correct answer");
  $(".choice-4").html("4. Wrong answer");
  $(".answer-choices").on("click", function() {
    if (($(this).attr("value") === "3")) {
      $("#rightOrWrong").html("You are correct!");
      explainAnswer5();
    } else {
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer5();
    }
  });
}

function explainAnswer5() {
  clearInterval(intervalId);
  displayExplanation();
  $("#explain").html("The answer is three because blah blah blah");

  function nextButton5() {
    $("#next5").show();
    $("#next4").hide();
  }
  setTimeout(nextButton5, 3000);
}

//Sixth & last question & answer explanation//
function sixthQuestion() {
  $("#question").html("What is the sixth question?");
  $(".choice-1").html("1. Wrong answer");
  $(".choice-2").html("2. Wrong answer");
  $(".choice-3").html("3. Wrong answer");
  $(".choice-4").html("4. Correct answer");
  $(".answer-choices").on("click", function() {
    if (($(this).attr("value") === "4")) {
      $("#rightOrWrong").html("You are correct!");
      explainAnswer6();
    } else {
      $("#rightOrWrong").html("Wrong answer!");
      explainAnswer6();
    }
  });
}

function explainAnswer6() {
  clearInterval(intervalId);
  displayExplanation();
  $("#explain").html("The answer is four because blah blah blah");

  function nextButton6() {
    $("#result").show();
    $("#next5").hide();
  }
  setTimeout(nextButton6, 3000);
}

//Start Game//
$(document).ready(function() {
  hideButtons();
  //On button click, display content, count down begins & show the first question//
  $("#start").on("click", function() {
    if (!timeRunning) {
      timeRunning = true;
      $("#start").hide();
      $("#choices").hide();
      showDisplay();
      firstQuestion();
      timer();
    }
  });
  //On next button click, show question 2//
  $("#next").unbind("click");
  $("#next").on("click", function() {
    showDisplay();
    secondQuestion();
    $("#next").hide();
    $("#rightOrWrong").hide();
    $("#explain").hide();
    time = 30;
    timer();
  });
  //On next button click, show question 3//
  $("#next2").unbind("click");
  $("#next2").on("click", function() {
    showDisplay();
    thirdQuestion();
    $("#next2").hide();
    $("#rightOrWrong").hide();
    $("#explain").hide();
    time = 30;
    timer();
  });
  //On next button click, show question 4//
  $("#next3").unbind("click");
  $("#next3").on("click", function() {
    showDisplay();
    fourthQuestion();
    $("#next3").hide();
    $("#rightOrWrong").hide();
    $("#explain").hide();
    time = 30;
    timer();
  });
  //On next button click, show question 5//
  $("#next4").unbind("click");
  $("#next4").on("click", function() {
    showDisplay();
    fifthQuestion();
    $("#next4").hide();
    $("#rightOrWrong").hide();
    $("#explain").hide();
    time = 30;
    timer();
  });
  //On next button click, show question 6//
  $("#next5").unbind("click");
  $("#next5").on("click", function() {
    showDisplay();
    sixthQuestion();
    $("#next5").hide();
    $("#rightOrWrong").hide();
    $("#explain").hide();
    time = 30;
    timer();
  });
  //Display result on result button click//
});
