const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "London"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
      answer: "Leonardo da Vinci"
    }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const submitButton = document.getElementById("submit-btn");
  const scoreElement = document.getElementById("score");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const quizQuestion = quizData[currentQuestion];
    questionElement.textContent = quizQuestion.question;
  
    optionsContainer.innerHTML = "";
  
    for (let i = 0; i < quizQuestion.options.length; i++) {
      const option = document.createElement("button");
      option.textContent = quizQuestion.options[i];
      option.classList.add("option-btn");
      optionsContainer.appendChild(option);
      option.addEventListener("click", checkAnswer);
    }
  }
  
  function checkAnswer(e) {
    const selectedOption = e.target;
    const quizQuestion = quizData[currentQuestion];
  
    if (selectedOption.textContent === quizQuestion.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.textContent = "";
    optionsContainer.innerHTML = "";
    submitButton.style.display = "none";
    scoreElement.textContent = "Your score: " + score + "/" + quizData.length;
    scoreElement.style.display = "block";
  }
  
  loadQuestion();
  