const startButton = document.getElementById('startButton')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementsByClassName('progress')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btn')
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const rightContainer = document.getElementById('right-container'); 

let shuffledQuestions, currentQuestionIndex

const questions = [
    {
        question: '1. What does HTML stand for?',
        answers: { 
            answer1:{ text: 'Home Tool Markup Language'},
            answer2 :{ text: 'Hyper Text Markup Language'},
            answer3 :{ text: 'Hyperlinks and Text Markup Language'},
            answer4 :{ text: 'Hotdogs and Text Markup Language',},
            correctAnswer : {text: 'Hyper Text Markup Language'}
        }
    },
    {
        question: '2. Choose the correct HTML element for the largest heading:',
        answers: {
            answer1: { text: 'h6'},
            answer2: { text: 'head'},
            answer3: { text: 'h1'},
            answer4: { text: 'heading'},
            correctAnswer : {text: 'h1'}
        }
    },
    {
        question: '3. Which character is used to indicate an end tag',
        answers: {
            answer1: { text: '.'},
            answer2:{ text: '^'},
            answer3:{ text: '/'},
            answer4:{ text: '*'},
            correctAnswer : {text: '/'}
        }
    },
    {
        question: '4. Inline elements are normally displayed without starting a new line.',
        answers: {
            answer1: { text: 'True'},
            answer2: { text: 'False'},
            answer3: { text: 'Depends'},
            answer4: { text: 'Neither'},
            correctAnswer : {text: 'True'}
        }
    },
    {
        question: '5. How can you make a numbered list?',
        answers: {
            answer1: { text: 'list'},
            answer2: { text: 'ul'},
            answer3: { text: 'ol'},
            answer4: { text: 'dl'},
            correctAnswer : {text: 'ol'}
        }
    },
    {
        question: '6. What does CSS stand for?',
        answers: {
            answer1:  { text: 'Computer Style Sheets'},
            answer2: { text: 'Colourful Style Sheets'},
            answer3: { text: 'Cascading Style Sheets'},
            answer4:  { text: 'Creative Style Sheets'},
            correctAnswer : {text: 'Cascading Style Sheets'}
        }
    },
    {
        question: '7. Which property is used to change the background colour?',
        answers: {
            answer1:  { text: 'background-colour'},
            answer2:  { text: 'bgcolour'},
            answer3:  { text: 'colour'},
            answer4:  { text: 'background'},
            correctAnswer : {text: 'background-colour'}
        }
    },
    {
        question: '8. Which CSS property controls the text size?',
        answers: {
            answer1:  { text: 'text-style'},
            answer2:  { text: 'font-style'},
            answer3:  { text: 'font-size'},
            answer4:  { text: 'text-size'},
            correctAnswer : {text: 'font-size'}
        }
    },
    {
        question: '9. Which property changes the font of an element?',
        answers: {
            answer1:  { text: 'font-weight'},
            answer2:  { text: 'font-style'},
            answer3:   { text: 'font-family'},
            answer4:   { text: 'font-cousins'},
            correctAnswer : {text: 'font-family'}
        }
    },
    {
        question: '10. Which property is used to change the left margin of an element?',
        answers: {
            answer1:   { text: 'indent'},
            answer2:  { text: 'margin-left'},
            answer3:  { text: 'padding-left'},
            answer4:  { text: 'padding-everywhere'},
            correctAnswer : {text: 'margin-left'}
        }
    }
]

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

startButton.addEventListener ('click', startGame);

function startGame () {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = [indexVariable]
    setNextQuestion()
}

function setNextQuestion() {
    console.log('im in here')
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    document.getElementById("left-container").style.display = 'none'
    document.getElementById("container").style.display = 'none'
    document.getElementById("right-container").style.display = 'block'; 
    questionElement.innerText = questions[indexVariable].question

   answer1.innerText = questions[indexVariable].answers.answer1.text; 
   answer2.innerText = questions[indexVariable].answers.answer2.text; 
   answer3.innerText = questions[indexVariable].answers.answer3.text; 
   answer4.innerText = questions[indexVariable].answers.answer4.text; 
    
}

function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild)
        answerButtonElement.removeChild(answerButtonElement.firstChild)
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button,dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else (
        element.classList.add('incorrect')
    )
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}



rightContainer.addEventListener('click', function(event){
      if(event.target.type == 'submit'){
        /// check the answer
       let answer = event.target.innerText; 
        if(answer == questions[indexVariable++].answers.correctAnswer.text){
            setNextQuestion (currentQuestionIndex)
        } 
        else if (answer !==questions[indexVariable++].answers.correctAnswer.text) {
            setNextQuestion(currentQuestionIndex)
        }
    }})
