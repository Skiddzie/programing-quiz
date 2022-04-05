//note to future aidan: this is all from a youtube tutorial and none of it works because the currentQuestions variable has nothing to do with the questions
//array. I have no fucking clue how he got this shit to work as it's typed out exactly the same way he did it. so just end up changing all of this
//when you get back to this project

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'what is the answer',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        answer: 1,

    },
    {
        question: 'how about this one?',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        answer: 3,

    },
    {
        question: 'what about now?',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        answer: 3,
    },
    {
        question: 'now?',
        choice1: "1",
        choice2: "2",
        choice3: "3",
        answer: 2,

    },
    {
        question: 'still know the answer, huh?',
        choice1: "1",
        choice2: "2",
        choice3: "3",

    },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        
        return window.location.assign('/end.html');
    }

    questionCounter++;
    proogressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        }, 1000)
    })
})