let currentQuestion = 0;
let totalQuestions = 10; // Replace with actual number of questions
let userAnswers = [];

function nextQuestion() {
  currentQuestion++;

  // Check if there are more questions
  if (currentQuestion <= totalQuestions) {
    window.location.href = `/questions/q${currentQuestion}.html`;
  } else {
    // Handle end of quiz (e.g., show results, redirect to results page)
    console.log("Quiz completed!");
    console.log("User Answers:", userAnswers);
    // Implement scoring logic and display results
  }
}

function submitAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    userAnswers.push(selectedAnswer.value);
    // Implement scoring logic or store answer here
    nextQuestion();
  } else {
    // Handle no answer selected (e.g., show error message)
    alert("Please select an answer.");
  }
}
