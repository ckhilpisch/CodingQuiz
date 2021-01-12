$(function() {
    $startButton = $('#startButton');
    $answers = $('ul');
    $ans1 = $('#ans1');
    $ans2 = $('#ans2');
    $ans3 = $('#ans3');
    $ans4 = $('#ans4');
    $right = $('.ansRight');
    $wrong = $('.ansWrong')
    $question = $('#question');
    $timer = $('#timer');
    $highScore = $('#highscore')
    $counter = 90;
    $interval = setInterval(function() {
    $counter--;
    if ($counter <= 0) {
     		clearInterval($interval);
      	$('#timer').html("<h1>Count down complete...Quiz is over</h1>");  
        return;
    }else{
    	$('#timer').text($counter);
    }
}, 1000);
    
    // console.log($wrong);


    $('ul').hide();
    $question.hide();
    $timer.hide();
    $('#startButton').on('click', function() {
        $startButton.hide();
        $question.show();
        $('ul').show();
        // $timer.show();     
    })
})

 
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