
// // function to display the last 10 highscores after each round of quiz
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    highScores.splice(10);
    const highScoreList = document.getElementById('highScores');
    highScoreList.innerHTML = highScores
        .map(function (score) {
            return `<li class="high-score">${score.initials} - ${score.score}</li>`;
        })
        .join('');
}
// Function to only store 20 highscores in local storage.
function clearScores() {
    if (confirm('Are you sure you want to clear the high scores?')) {
        window.localStorage.removeItem('highScores');
        window.location.reload();
    }
};
document.getElementById('clear').onclick = clearScores;
displayHighScores();