const buttons = document.querySelector('[data-js-container]')
const display = document.querySelector('[data-js-display]')
let displayValue = '0'
let state = false
// let dragMoved = false;
display.value = displayValue
//Клики



buttons.addEventListener('click', (e) => {
  // if (dragMoved) return;

  e.target.classList.add('pressed');
  setTimeout(() => e.target.classList.remove('pressed'), 150);

  const newText = e.target.innerText;
  mainLogic(newText) })



//Кнопки

document.addEventListener("keydown", (e) => {

  const key = e.key;

  if (!isNaN(Number(key))) mainLogic(key);
  else if (['+', '-', '*', '/'].includes(key)) mainLogic(key);
  else if (key === "=") mainLogic('=');
  else if (key === "Backspace") mainLogic('AC');

});



//Логика

function mainLogic(newText) {

  let lastChar = displayValue[displayValue.length - 1]

  if (state === true && !isNaN(Number(newText))) {
    displayValue = '' + newText
    state = false
    display.textContent  = displayValue
    return;
  }


  else if (!isNaN(Number(newText)) && Number(displayValue) !== 0 ||
            !isNaN(Number(newText)) && lastChar === '.') {
    displayValue += newText
    state = false
    display.textContent  = displayValue
    return;
  }

  else if (['+', '-', '*', '/', '.'].includes(lastChar) &&
    ['+', '-', '*', '/', '.'].includes(newText)) {
    displayValue = String(displayValue.slice(0, displayValue.length - 1)) + newText
    display.textContent  = displayValue
    return;
  }

  else if (newText === '<' && displayValue.length > 1) {
    displayValue = displayValue.slice(0, displayValue.length - 1)
    display.textContent = displayValue
    return;
  }

  else if (newText === '<' && displayValue.length === 1) {
    displayValue = '0'
    display.textContent = displayValue
    return;
  }

  else if (!isNaN(Number(lastChar)) &&
      ( newText === '+' ||
        newText === '-' ||
        newText === '*' ||
        newText === '/' ||
        newText === '.')) {
    displayValue += newText
    state = false
    display.textContent  = displayValue
    return;
  }

  else if (newText === 'AC') {
    displayValue = '0'
    state = false
    display.textContent  = displayValue
    return;
  }

  else if (
    !isNaN(Number(lastChar)) && newText === '=') {
    displayValue = String(eval(displayValue))
    state = true
    display.textContent  = displayValue
    return;
    }

  else if (['+', '-', '*', '/'].includes(lastChar) && newText === '=') {
    displayValue = String(eval(displayValue.slice(0, displayValue.length - 1)))
    state = true
    display.textContent  = displayValue
    return;
  }

  if (!isNaN(Number(newText)) && Number(displayValue) === 0 && lastChar !== '.')  {
    displayValue = newText
    display.textContent  = displayValue
  }

}
