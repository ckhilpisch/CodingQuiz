var userIntials = document.getElementById('userIntials');
var saveIntials = document.getElementById('saveIntials');
var mostRecentScore = localStorage.getItem('yourscore');
var highScores = JSON.parse(localStorage.getItem('score')) || [];
var maxHighScores = 3;

// userIntials.addEventListener('keyup',() {
//     saveIntials.disabled = !userIntials.value;
// });

// saveHighScore(e) {
//     e.preventDefault();
// };

var scores = {
    score: mostRecentScore,
    name: userIntials.value
};

console.log(scores);