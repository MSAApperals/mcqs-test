let currentQuestion = 1;
const totalQuestions = 20;
let correctAnswers = 0;
let skippedQuestions = 0;
let answeredQuestions = new Set();

function showQuestion(questionNumber) {
    // Hide all questions and results page
    document.querySelectorAll('.question-page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('results-page').style.display = 'none';

    // Show the selected question
    document.getElementById(`question-${questionNumber}`).style.display = 'block';

    // Clear any previous warning message
    document.getElementById('warning-message').textContent = '';
}

function nextQuestion(questionNumber) {
    const options = document.querySelectorAll(`#question-${questionNumber} ul li`);
    let isSelected = false;

    // Check if any option is selected
    options.forEach(option => {
        if (option.style.backgroundColor === 'green' || option.style.backgroundColor === 'red') {
            isSelected = true;
        }
    });

    if (isSelected) {
        // If an option is selected, allow the user to proceed to the next question
        if (questionNumber < totalQuestions) {
            currentQuestion = questionNumber + 1;
            showQuestion(currentQuestion);
        } else {
            showResults();
        }
    } else {
        // Show warning message only if no option is selected
        document.getElementById('warning-message').textContent = 'Please select an option to proceed or skip the question.';
    }
}

function previousQuestion(questionNumber) {
    if (questionNumber > 1) {
        currentQuestion = questionNumber - 1;
        showQuestion(currentQuestion);
    }
}

function skipQuestion(questionNumber) {
    if (!answeredQuestions.has(questionNumber)) {
        skippedQuestions++;
    }
    if (questionNumber < totalQuestions) {
        currentQuestion = questionNumber + 1;
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function checkAnswer(element, isCorrect, questionNumber) {
    if (!answeredQuestions.has(questionNumber)) {
        if (isCorrect) {
            element.style.backgroundColor = 'green';
            correctAnswers++;
        } else {
            element.style.backgroundColor = 'red';
        }
        answeredQuestions.add(questionNumber);
    }
}

function showResults() {
    const score = correctAnswers;
    const percentage = (score / totalQuestions) * 100;

    document.getElementById('score').textContent = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById('percentage').textContent = `Your score is ${percentage.toFixed(2)}%.`;
    document.getElementById('skipped').textContent = `You skipped ${skippedQuestions} questions.`;

    document.querySelectorAll('.question-page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById('results-page').style.display = 'block';
}

function restartQuiz() {
    correctAnswers = 0;
    skippedQuestions = 0;
    answeredQuestions.clear();
    currentQuestion = 1;

    // Reset question styles
    document.querySelectorAll('li').forEach(li => {
        li.style.backgroundColor = '';
    });

    // Show the first question and hide results page
    showQuestion(currentQuestion);
}

// Initialize the quiz
showQuestion(currentQuestion);
