// $highScoreDiv = $("#highScoreDiv");
// $intials = $("#intials");
// $sendButton = $("#send");
// $userIntialsSpan = $("user-intials");
// $userHighScoreSpan = $("user-scores");
var userIntials = document.getElementById('userIntials');
var saveIntials = document.getElementById('saveIntials');
var mostRecentScore = localStorage.getItem('yourscore');
var finalScore = document.getElementById("finalscore");
userIntials.addEventListener('keyup'), () {
    saveIntials.disabled =!userIntials.nodeValue;
}

saveHighScore(e) {
    e.preventDefault();
};