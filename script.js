$(function() {
    $startButton = $('#startButton');
    $answers = $('ul');
    $ans1 = $('#ans1');
    $ans2 = $('#ans2');
    $ans3 = $('#ans3');
    $ans4 = $('#ans4');
    // $correct = $('.correct');
    // $incorrect = $('.incorrect')
    $question = $('#question');
    $timer = $('#timer');
    $highScore = $('#highscore')
    $mysound = 

    // timer
   
    

    $('ul').hide();
    $question.hide();
    $timer.hide();
    $('#startButton').on('click', function() {
        $startButton.hide();
        $question.show();
        $('ul').show();
        $timer.show();
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
    })
})


$(function() {
    $question.html('In the UK, the abrreviation NHS stands for National what Service?');
    $ans1.html('Humanity');
    $ans2.html('Health').attr('class', correct)
    $ans3.html('Honour');
    $ans4.html('Household');
})

$(function() {
    $question.html('Which Disney character famously leaves behind a glass slipper at a royal ball?');
    $ans1.html('Pocahontas');
    $ans2.html('Sleeping Beauty');
    $ans3.html('Cinderella').attr('class', correct)
    $ans4.html('Elsa');

})

$(function() {
    $question.html('What does the word loquacious mean?');
    $ans1.html('Angry');
    $ans2.html('Chatty').attr('class', correct)
    $ans3.html('Beautiful');
    $ans4.html('Shy');

})
 
$(function() {
    $question.html('The hammer and sickle is on of the most recognizeable symbols of which political ideology?');
    $ans1.html('Rebublicanism');
    $ans2.html('Communism').attr('class', correct);
    $ans3.html('Conservatism');
    $ans4.html('Liberalism');

})

$(function() {
    $question.html('Which toys have been marketed with the phrase "robots in disguise"?');
    $ans1.html('Bratz Dolls');
    $ans2.html('Sylvanian Families');
    $ans3.html('Hatchimals');
    $ans4.html('Transformers').attr('class', correct)

})

// $(function(class) {
//     if (class == correct), {
//         mysound.play();
//     } else if (class == incorrect),
//     {mysoundbad.play()}

    
// })

// // if class = correct, then some code for a correct answer,
// else if class != correct, then some alerts for a wrong answer.

// next question

// push new question/answer array

// repeat until finished
// show scorereceived
// option to add intials for high score