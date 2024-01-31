let startButton = document.getElementById("start");
let questionTitle = document.getElementById("question-title");
let choicesContainer = document.getElementById("choices");
let timerDisplay = document.getElementById("time");
let finalScoreDisplay = document.getElementById("final-score");
let initialsInput = document.getElementById("initials");
let submitButton = document.getElementById("submit");

let startScreen = document.getElementById("start-screen");
let questionsContainer = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let feedbackContainer = document.getElementById("feedback");

let currentQuestionIndex = 0;
let timeLeft = 100;
let score = 0;
let timerInterval;
// Import sfx Sounds
let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");

// Function to start the quiz and display the first question 
function startQuiz() {
    startScreen.classList.add('hide');
    questionsContainer.classList.remove('hide');
    timerInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            timerDisplay.textContent = 0;
            endQuiz();
        }
    }, 1000);
    displayQuestion(questions[currentQuestionIndex]);
}