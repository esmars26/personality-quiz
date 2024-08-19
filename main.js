let currentQuestion = 0;
let userAnswers = [];

function nextQuestion() {
  currentQuestion++;
  window.location.href = `questions/q${currentQuestion}.html`;
}

function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  userAnswers.push(selectedAnswer);
  // Implement scoring logic or store answer here
  nextQuestion();
}
