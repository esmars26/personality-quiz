let currentQuestion = 0;
let totalQuestions = 10; // Replace with actual number of questions
let userAnswers = [];
let score = 0;
let correctAnswers = ["correct_answer_1", "correct_answer_2", /* ... */]; // Replace with correct answers

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion <= totalQuestions) {
    window.location.href = `q${currentQuestion}.html`;
  } else {
    // Calculate final score
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        score++;
      }
    }

    // Display results
    window.location.href = `/results.html?score=${score}`;
  }
}

function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    userAnswers.push(selectedAnswer.value);
    nextQuestion();
  } else {
    alert("Please select an answer.");
  }
}
