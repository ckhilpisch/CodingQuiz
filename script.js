$(function() {
    var $startButton = $('#startButton');
    var $answers = $('ul');
    var $ans1 = $('#ans1');
    var $ans2 = $('#ans2');
    var $ans3 = $('#ans3');
    var $ans4 = $('#ans4');
    var $question = $('#question');
    var $timer = $('#timer');
    var $highScore = $('#highscore')
    
    // $ans1.hide();
    // $ans2.hide();
    // $ans3.hide();
    // $ans4.hide();
    $('ul').hide();
    $question.hide();
    $('#startButton').on('click', function() {
        $startButton.hide();
        $question.show();
        $('ul').show();
        // $ans1.show();
        // $ans2.show();
        // $ans3.show();
        // $ans4.show();
        $timer.start();

    })
})

//   create a start button page.   hide all other elements until the start button is clicked.   once it is clicked, show the new elements.  
// quizlist
// question
// ans1
// ans2
// ans3
// ans4

// if class = correct, then some code for a correct answer,
// else if class != correct, then some alerts for a wrong answer.

// next question

// push new question/answer array

// repeat until finished
// show scorereceived
// option to add intials for high score