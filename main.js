const questions = [
  "Question 1: How do you feel about crowds?",
  "Question 2: What do you prefer: planning or spontaneity?",
  // Add more questions here
];

const answers = [
  ["A: Love them", "B: Tolerate them", "C: Avoid them", "D: Hate them"],
  ["A: Planning", "B: Spontaneity", "C: Balance", "D: It depends"],
  // Add more answer sets here
];

const scores = {
  "Personality A": [1, 3, 2, 4],
  "Personality B": [4, 1, 3, 2],
  "Personality C": [2, 4, 1, 3],
  "Personality D": [3, 2, 4, 1],
};

function renderQuiz() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.textContent = question;
    quizContainer.appendChild(questionElement);

    const answerElements = answers[index].map((answer, i) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = i + 1; // Value starts from 1

      const label = document.createElement("label");
      label.textContent = answer;

      const answerContainer = document.createElement("div");
      answerContainer.appendChild(input);
      answerContainer.appendChild(label);

      return answerContainer;
    });
    quizContainer.append(...answerElements);
  });
}

function calculateScore(userAnswers) {
  const personalityScores = {
    "Personality A": 0,
    "Personality B": 0,
    "Personality C": 0,
    "Personality D": 0,
  };

  userAnswers.forEach((answer, index) => {
    const answerIndex = answer - 1; // Adjust for zero-based indexing
    for (const personality in scores) {
      personalityScores[personality] += scores[personality][answerIndex];
    }
  });

  return personalityScores;
}

function determinePersonality(personalityScores) {
  let maxScore = 0;
  let maxPersonality = "";

  for (const personality in personalityScores) {
    if (personalityScores[personality] > maxScore) {
      maxScore = personalityScores[personality];
      maxPersonality = personality;
    }
  }

  return maxPersonality;
}

function calculateAndDisplayResult() {
  const userAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
    .map(input => parseInt(input.value));

  const scores = calculateScore(userAnswers);
  const result = determinePersonality(scores);

  const resultContainer = document.getElementById("result");
  resultContainer.textContent = `Your personality is: ${result}`;
}

renderQuiz();

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', calculateAndDisplayResult);
