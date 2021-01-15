$(function () {
  startButton = $("#startButton");
  answers = $("ul");
  answersArea = $('.choice')
  ans1 = $("#ans1");
  ans2 = $("#ans2");
  ans3 = $("#ans3");
  ans4 = $("#ans4");
  question = $("#question");
  timer = $("#timer");
  highScore = $("#highScore");
  yourScore = "";
  gameOver = $("#gameOver");
  highScoreDiv = $("#highScoreDiv");
  
  $("ul").hide();
  question.hide();
  timer.hide();
  highScoreDiv.hide();

  $("#startButton").on("click", function () {
    startButton.hide();
    question.show();
    $("ul").show();
    timer.show();
    quest0();

    counter = 90;
    interval = setInterval(function () {
      counter--;
      if (counter <= 0) {
        clearInterval(interval);
        $("#timer").html("<h1>Count down complete...Quiz is over</h1>");
        return;
      } else {
        $("#timer").text(counter);
      }
    }, 1000);
  })

  function decrement() {
    counter-= 10;
  }

  function timerThings () {
    if (counter >= 10) {
      decrement();
    } else {
      clearInterval(interval);
      counter = 0;
      timer.html(counter);
      $("ul").hide();
      question.hide();
      gameOver.html("GAME OVER!!!!  YOUR SCORE IS " + counter + " !!!!");
      yourScore = counter;
      
    }
  }
  function quest0() {
    question.html(
      "In the UK, the abrreviation NHS stands for National what Service?"
    );
    ans1.html("Humanity");
    ans2.html("Health");
    ans2.removeClass("incorrect").addClass("correct");
    ans3.html("Honour");
    ans4.html("Household");
  
    $(".correct").on("click", function () {
      $(".correct,.incorrect").off();
      ans2.removeClass("correct").addClass("incorrect");
      quest1();

    });
    $(".incorrect").on("click", function () {
      timerThings();
    })
  }
  
  function quest1() {
    question.html(
      "Which Disney character famously leaves behind a glass slipper at a royal ball?"
    );
    ans1.html("Pocahontas");
    ans2.html("Sleeping Beauty");
    ans3.html("Cinderella");
    ans3.removeClass("incorrect").addClass("correct");
    ans4.html("Elsa");
  
    $(".correct").on("click", function () {
      $(".correct,.incorrect").off();
      ans3.removeClass("correct").addClass("incorrect");
  
      quest2();
    });
    $(".incorrect").on("click", function () {
      timerThings();
    })
  }
  
  function quest2() {
    question.html("What does the word loquacious mean?");
    ans1.html("Angry");
    ans2.html("Chatty");
    ans2.removeClass("incorrect").addClass("correct");
    ans3.html("Beautiful");
    ans4.html("Shy");
  
    $(".correct").on("click", function () {
      $(".correct,.incorrect").off();
      ans2.removeClass("correct").addClass("incorrect");
      quest3();
    });
    $(".incorrect").on("click", function () {
      timerThings();
    });

    
  }
  
  function quest3() {
    question.html(
      "The hammer and sickle is one of the most recognizeable symbols of which political ideology?"
    );
    ans1.html("Rebublicanism");
    ans2.html("Communism");
    ans2.removeClass("incorrect").addClass("correct");
    ans3.html("Conservatism");
    ans4.html("Liberalism");
  
    $(".correct").on("click", function () {
      $(".correct,.incorrect").off();
      ans2.removeClass("correct").addClass("incorrect");
      quest4();
    });
  
    $(".incorrect").on("click", function () {
      timerThings();
    });
  }
  
  function quest4() {
    question.html(
      'Which childrens toys have been marketed with the phrase "robots in disguise"?'
    );
    ans1.html("Bratz Dolls");
    ans2.html("Sylvanian Families");
    ans3.html("Hatchimals");
    ans4.html("Transformers");
    ans4.removeClass("incorrect").addClass("correct");
  
    $(".correct").on("click", function () {
      $(".correct,.incorrect").off();
      ans4.removeClass("correct").addClass("incorrect");
      quest5();
    });
  
    $(".incorrect").on("click", function () {
      timerThings();
    });
  }
  
  function quest5() {
    question.html(
      "Construction of which of these famous landmarks was completed first?"
    );
    ans1.html("The Empire State Building");
    ans2.html("Royal Albert Hall");
    ans3.html("The Eiffel Tower");
    ans4.html("Big Ben Clock Tower");
    ans4.removeClass("incorrect").addClass("correct");
  
    $(".correct").on("click", function () {
      $(".correct,.incorrect").off();
      ans4.removeClass("correct").addClass("incorect");
      endquiz();
    });
  
  }
  
  function endquiz() {
    $("ul").hide();
    question.hide();
    gameOver.html("GAME OVER!!!!  YOUR SCORE IS " + counter + " !!!!");
    yourScore = counter;
    clearInterval(interval); 
  }

  function passValue() {
    var score = yourScore
    localStorage.setItem("textvalue", score);
    return false;
  }
  passValue ();

  });