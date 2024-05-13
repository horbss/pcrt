// script.js
const questions = [
    {
      question: "Do you have access to a stable internet connection?",
      choices: ["Yes", "No"]
    },
    {
      question: "Are you currently incarcerated?",
      choices: ["Yes", "No"]
    },
    {
      question: "Are you legally able to provide consent for the purposes of participating in this study?",
      choices: ["Yes", "No"]
    },
    {
      question: "You must be 18 years or older (or an adult in your country of origin).",
      choices: [
        "I confirm that I am 18 years or older.",
        "I am not 18 years or older."
      ]
    },
    {
      question: "You must not have a cognitive impairment that requires you to have a legally authorized representative (LAR) provide consent for you.",
      choices: [
        "I confirm that I do not have a cognitive impairment.",
        "I have a cognitive impairment."
      ]
    },
    {
      question: "Are you taking this on a personal computer?",
      choices: ["Yes", "No"]
    },
    {
      question: "Does your computer have 1 GB RAM?",
      choices: ["Yes", "No"]
    },
    {
      question: "Please look at the following demo:",
      choices: [
        "The demo is running smoothly",
        "The demo is laggy, choppy, or stuttering."
      ]
    },
    {
      question: "What is your prior experience with video games?",
      choices: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert"
      ]
    },
    {
      question: "Rate how much you agree with the following statements:",
      choices: [
        "Strongly agree",
        "Agree",
        "Neither agree nor disagree",
        "Disagree",
        "Strongly disagree"
      ],
      subquestions: [
        "I am experienced in playing video games",
        "I am experienced in playing action-based video games",
        "I am experienced in playing PC (personal computer) games"
      ]
    }
];
  
const questionDiv = document.getElementById('question');
let currentQuestionIndex = 0;
  
// Function to display current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionDiv.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <div id="choices"></div>
    `;
    const choicesDiv = document.getElementById('choices');
    currentQuestion.choices.forEach(choice => {
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = choice;
        choiceBtn.classList.add('btn');
        choiceBtn.addEventListener('click', () => selectChoice(choice));
        choicesDiv.appendChild(choiceBtn);
    });
}
  
// Function to handle user choice selection
function selectChoice(choice) {
    // You can do something with the user's choice here
    console.log(`Selected choice: ${choice}`);
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Display a thank you message or redirect to another page when all questions are answered
        questionDiv.innerHTML = "<h2>Thank you for completing the questionnaire!</h2>";
    }
}
  
// Display the first question when the page loads
 window.onload = displayQuestion();
  