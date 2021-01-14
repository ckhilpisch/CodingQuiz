$(function () {
  $startButton = $("#startButton");
  $answers = $("ul");
  $answersArea = $('.choice')
  $choiceA = $("#A");
  $choiceB = $("#B");
  $choiceC = $("#C");
  $choiceD = $("#D");
  $question = $("#question");
  $timer = $("#timer");
  $highScore = $("#highscore");
  $yourScore = "";
  $gameOver = $("#gameOver");

  $("ul").hide();
  $question.hide();
  $timer.hide();
  $("#startButton").on("click", function () {
    $startButton.hide();
    $question.show();
    $("ul").show();
    $timer.show();
    renderQuestion();
    // $timer.show();
    $counter = 90;
    $interval = setInterval(function () {
      $counter--;
      if ($counter <= 0) {
        clearInterval($interval);
        $("#timer").html("<h1>Count down complete...Quiz is over</h1>");
        return;
      } else {
        $("#timer").text($counter);
      }
    }, 1000);
  });


    questions = [
        {
            question: 'In the UK, the abrreviation NHS stands for National what Service?',
            choiceA: 'Humanity',
            choiceB: 'Health',
            choiceC: 'Honour',
            choiceD: 'Household',
            correct: 'B', 
        },
        {
            question: 'Which Disney character famously leaves behind a glass slipper at a royal ball?',
            choiceA: 'Pocahontas',
            choiceB: 'Sleeping Beauty',
            choiceC: 'Cinderella',
            choiceD: 'Elsa',
            correct: 'C',    
        },
        {
            question: 'What does the word loquacious mean?',
            choiceA: 'Angry',
            choiceB: 'Chatty',
            choiceC: 'Beautiful',
            choiceD: 'Shy',
            correct: 'B',    
        },
        {
            question: 'The hammer and sickle is one of the most recognizeable symbols of which political ideology?',
            choiceA: 'Republicanism',
            choiceB: 'Communism',
            choiceC: 'Liberalism',
            choiceD: 'Conservativism',
            correct: 'B',     
        },
        {
            question: 'Which childrens toys have been marketed with the phrase "robots in disguise"?',
            choiceA: 'Bratz Dolls',
            choiceB: 'Sylvanian Families',
            choiceC: 'Hatchimals',
            choiceD: 'Transformers',
            correct: 'D',   
        },
        {
            question: 'Construction of which of these famous landmarks was completed first?',
            choiceB: 'Royal Albert Hall',
            choiceC: 'The Eiffel Tower',
            choiceD: 'Big Ben Clock Tower',
            correct: 'D',    
        },
    ]

    var finalQuestion = questions.length - 1;
    var runningQuestion = 0;

    function renderQuestion(){
        var q = questions[runningQuestion];
        $question.html = q.question;
        $choiceA.html = q.choiceA;
        $choiceB.html = q.choiceB;
        $choiceC.html = q.choiceC;
        $choiceD.html = q.choiceD;
    }
    function checkanswer (answer) {
        if (questions[runningQuestionIndex].correct ==answer)
        answerIsCorrect();
        } else {
        answerIsIncorrect();
        }

    

    renderQuestion();
    runningQuestion++
    renderQuestion();

});
// function quest0() {
//   $question.html(
//     "In the UK, the abrreviation NHS stands for National what Service?"
//   );
//   $ans1.html("Humanity");
//   $ans2.html("Health");
//   $ans2.removeClass("incorrect").addClass("correct");
//   $ans3.html("Honour");
//   $ans4.html("Household");

//   $(".correct").on("click", function () {
//     $(".correct,.incorrect").off();
//     $ans2.removeClass("correct").addClass("incorrect");
//     quest1();
//   });

//   $(".incorrect").on("click", function () {
//     console.log("decrement timer");
//   });
// }

// function quest1() {
//   $question.html(
//     "Which Disney character famously leaves behind a glass slipper at a royal ball?"
//   );
//   $ans1.html("Pocahontas");
//   $ans2.html("Sleeping Beauty");
//   $ans3.html("Cinderella");
//   $ans3.removeClass("incorrect").addClass("correct");
//   $ans4.html("Elsa");

//   $(".correct").on("click", function () {
//     $(".correct,.incorrect").off();
//     $ans3.removeClass("correct").addClass("incorrect");

//     quest2();
//   });

//   $(".incorrect").on("click", function () {
//     console.log("decrement timer");
//   });
// }

// function quest2() {
//   $question.html("What does the word loquacious mean?");
//   $ans1.html("Angry");
//   $ans2.html("Chatty");
//   $ans2.removeClass("incorrect").addClass("correct");
//   $ans3.html("Beautiful");
//   $ans4.html("Shy");

//   $(".correct").on("click", function () {
//     $(".correct,.incorrect").off();
//     $ans2.removeClass("correct").addClass("incorrect");
//     quest3();
//   });

//   $(".incorrect").on("click", function () {
//     console.log("decrement timer");
//   });
// }

// function quest3() {
//   $question.html(
//     "The hammer and sickle is one of the most recognizeable symbols of which political ideology?"
//   );
//   $ans1.html("Rebublicanism");
//   $ans2.html("Communism");
//   $ans2.removeClass("incorrect").addClass("correct");
//   $ans3.html("Conservatism");
//   $ans4.html("Liberalism");

//   $(".correct").on("click", function () {
//     $(".correct,.incorrect").off();
//     $ans2.removeClass("correct").addClass("incorrect");
//     quest4();
//   });

//   $(".incorrect").on("click", function () {
//     console.log("decrement timer");
//   });
// }

// function quest4() {
//   $question.html(
//     'Which childrens toys have been marketed with the phrase "robots in disguise"?'
//   );
//   $ans1.html("Bratz Dolls");
//   $ans2.html("Sylvanian Families");
//   $ans3.html("Hatchimals");
//   $ans4.html("Transformers");
//   $ans4.removeClass("incorrect").addClass("correct");

//   $(".correct").on("click", function () {
//     $(".correct,.incorrect").off();
//     $ans4.removeClass("correct").addClass("incorrect");
//     quest5();
//   });

//   $(".incorrect").on("click", function () {
//     console.log("decrement timer");
//   });
// }

// function quest5() {
//   $question.html(
//     "Construction of which of these famous landmarks was completed first?"
//   );
//   $ans1.html("The Empire State Building");
//   $ans2.html("Royal Albert Hall");
//   $ans3.html("The Eiffel Tower");
//   $ans4.html("Big Ben Clock Tower");
//   $ans4.removeClass("incorrect").addClass("correct");

//   $(".correct").on("click", function () {
//     $(".correct,.incorrect").off();
//     $ans4.removeClass("correct").addClass("incorect");
//     endquiz();
//   });

//   $(".incorrect").on("click", function () {
//     console.log("decrement timer");
//   });
// }

// function endquiz() {
//   $("ul").hide();
//   $question.hide();
//   $gameOver.html("GAME OVER!!!!  YOUR SCORE IS " + $counter + " !!!!");

// }

// // $(function(class) {
// //     if (class == correct), {
// //         mysound.play();
// //     } else if (class == incorrect),
// //     {mysoundbad.play()}

// // })

// // // if class = correct, then some code for a correct answer,
// // else if class = incorrect, then some alerts for a wrong answer.
// // if (class == correct), {

// // } else if (class == incorrect),

// // // next question

// // push new question/answer array

// // repeat until finished
// // show scorereceived
// // option to add intials for highscore
