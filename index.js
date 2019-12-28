var clearButton = document.querySelector('.clear-button-js')
var getAnswerButton = document.querySelector('.question-button-js')
var inputQuestion = document.querySelector('.question-input-js')
var possibleAwnsers = ['It is certain', 'It is decidedly so.', 'Without a doubt', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']
var eightBall = document.querySelector('.eight-ball-js')
var dipslayQuestion = document.querySelector('.question-js')
var displayAnwser = document.querySelector('.awnser-js')

function randomAwnser() {
  i = Math.round(Math.random() * possibleAwnsers.length)
  return possibleAwnsers[i]
}

function clickHandler() {
  if (event.target === getAnswerButton) {
    runAnswer('none')
  } else if (event.target === clearButton) {
    runAnswer('initial')
  }
}

function runAnswer(eightBallDisplay) {
  eightBall.style.display = eightBallDisplay
  if (eightBallDisplay === 'none') {
    showQuestionAnswer()
  } else {
    showQuestionAnswer(' ')
  }
  inputQuestion.value = ''
  enableButtons()
}

function showQuestionAnswer(clear) {
  dipslayQuestion.innerText = clear || `"${inputQuestion.value}"`
  displayAnwser.innerText = clear || randomAwnser()
}

function enableButtons() {
  if (inputQuestion.value.length > 3) {
    getAnswerButton.removeAttribute('disabled')
  } else if (displayAnwser.innerText !== '') {
    clearButton.removeAttribute('disabled')
    getAnswerButton.setAttribute('disabled', true)
  } else {
    clearButton.setAttribute('disabled', true)
  }
}

window.addEventListener('click', clickHandler)
window.addEventListener('keyup', enableButtons)
