const quizData = [
    {
        question: 'Em qual país moramos?',
        a: 'Argentina',
        b: 'Uruguai',
        c: 'Brasil',
        d: 'Cuiabá',
        correct:  'c'
    },{
        question: 'Qual a linguagem de programação foi usada nesse quiz?',
        a: 'C',
        b: 'Python',
        c: 'Java',
        d: 'JS',
        correct:  'd'
    },{
        question: 'Qual o presidente que fundou brasilia?',
        a: 'kubichek',
        b: 'Lula',
        c: 'Bolsonaro',
        d: 'Obama',
        correct:  'a'
    },{
        question: 'O que o palmeiras não tem?',
        a: 'Mundial',
        b: 'Jogadores',
        c: 'Paulista',
        d: 'Presidente',
        correct:  'a'
    }
];

const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {
    
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    }

    currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    }else{
        quiz.innerHTML = `<h2 class="final">Seu placar é ${score}/ 4 .</h2>
        
        <button  onclick="location.reload()">RecarregarQuiz</button>`
    }

}); 