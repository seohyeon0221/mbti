//data.js를 가져오기
import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

//mbti타입을 저장하는 변수
let mbti =''

//선택버튼에 eventlistner를 담아놓는다
choice1El.addEventListener('click', function() {
  //console.log("첫번째 단추가 눌렸습니다")
  nextQuestion(0)
})
choice2El.addEventListener('click', function() {
  console.log("두번째 단추가 눌렸습니다")
  nextQuestion(1)
})

let currentNumber = 0
function renderQuestion(){
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  
}

function nextQuestion(choiceNumber){
  const question = questions[currentNumber]

  if(currentNumber === questions.length-1){
    showResultPage()
    return
  }
  
  //해딩 mbti의 타입을 얻어오기
  mbti = mbti+ question.choices[choiceNumber].value

  currentNumber = currentNumber + 1
  progressValueEl.style.width = (currentNumber + 1)*10 + '%'
  renderQuestion()
}

function showResultPage(){
  location.href='./results.html?mbti='+mbti
}

renderQuestion()