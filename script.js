const quizData = [
  {
    question: "Javascript was invented in...",
    a: "1996",
    b: "1998",
    c: "2002",
    d: "1995",
    correct: "d",
  },
  {
    question: "Who is the president in Srilanka in 2020?",
    a: "Donald Trump",
    b: "Gotabaya Rajapakshe",
    c: "Mithripala Sirisena",
    d: "Mahinda Rajapakshe",
    correct: "b",
  },
  {
    question: "What is most popular programming language in 2019?",
    a: "Javascript",
    b: "Python",
    c: "Java",
    d: "C++",
    correct: "a",
  },
  {
    question: "What is the best way to learn something?",
    a: "Think and learn",
    b: "Go to the college",
    c: "Learn by doing",
    d: "None of above",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswers();

  let currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// to get the checked answer
function getSelectedAnswer() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// to unselect the previous answer
function deSelectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //to check the answer
  const answer = getSelectedAnswer();

  if (answer) {
    //score count
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TODO: show results
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
      <button class="reload" onclick="location.reload()">Reload</button>`;
    }
  }
});
