const quizData = [
    {
        question: "Question 1: What is the central concept of Industry 4.0?",
        a: "A) Automation and data exchange in manufacturing technologies (correct)",
        b: "B) Traditional manufacturing methods",
        c: "C) Handcrafting techniques",
        d: "D) None of the above",
        correct: "a",
    },
    {
        question: "Question 2: Which technology is NOT typically associated with Industry 4.0?",
        a: "A) Artificial Intelligence",
        b: "B) Blockchain",
        c: "C) Steam engines (correct)",
        d: "D) Internet of Things (IoT)",
        correct: "c",
    },
    {
        question: "Question 3: Which term describes the phenomenon of machines communicating and cooperating with each other?",
        a: "A) Machine Intelligence",
        b: "B) Machine Collaboration",
        c: "C) Machine Learning",
        d: "D) Machine-to-Machine (M2M) Communication (correct)",
        correct: "d",
    },
    {
        question: "Question 4: Which of the following is a key characteristic of Industry 4.0?",
        a: "A) Centralized decision-making",
        b: "B) Linear supply chains",
        c: "C) Mass production with limited customization",
        d: "D) Decentralized decision-making and customization (correct)",
        correct: "d",
    },
    {
        question: "Question 5: What is the primary goal of implementing Industry 4.0 technologies?",
        a: "A) Reduce efficiency",
        b: "B) Increase labor intensity",
        c: "C) Improve productivity and flexibility (correct)",
        d: "D) Maintain the status quo",
        correct: "c",
    },
    {
        question: "Question 6: What does the term 'cyber-physical systems' refer to in the context of Industry 4.0?",
        a: "A) Physical machines with no digital components",
        b: "B) Systems that only exist in virtual reality",
        c: "C) Integration of physical and digital elements in manufacturing (correct)",
        d: "D) None of the above",
        correct: "c",
    },
    {
        question: "Question 7: Which of the following is NOT a challenge associated with the adoption of Industry 4.0?",
        a: "A) Cybersecurity risks",
        b: "B) Lack of skilled workforce",
        c: "C) Increased efficiency (correct)",
        d: "D) Resistance to change",
        correct: "c",
    },
    {
        question: "Question 8: What role does Big Data play in Industry 4.0?",
        a: "A) It is not relevant",
        b: "B) It is used for storing traditional data",
        c: "C) It enables predictive maintenance and optimization (correct)",
        d: "D) It is only used for marketing purposes",
        correct: "c",
    },
    {
        question: "Question 9: What is the concept of 'smart factories' in Industry 4.0?",
        a: "A) Factories that don't use any technology",
        b: "B) Factories with advanced robotics",
        c: "C) Factories with interconnected machinery and systems (correct)",
        d: "D) Factories that prioritize manual labor over automation",
        correct: "c",
    },
    {
        question: "Question 10: Which industry is NOT significantly impacted by Industry 4.0?",
        a: "A) Healthcare",
        b: "B) Agriculture",
        c: "C) Manufacturing",
        d: "D) Entertainment (correct)",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
