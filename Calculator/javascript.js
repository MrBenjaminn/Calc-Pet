//Калькулятор логика

let buttons = document.querySelector('[data-js-container]')
let display = document.querySelector('[data-js-display]')
let displayValue = ''
let state = false

buttons.addEventListener('click', (e) => {

  if (state === false && !isNaN(Number(e.target.innerText)))  {
    displayValue += e.target.innerText
    display.value = displayValue
    state = false
  }

  else if (
    !isNaN(Number(displayValue[displayValue.length - 1])) &&
    (e.target.innerText === '+' ||
     e.target.innerText === '-' ||
     e.target.innerText === '*' ||
     e.target.innerText === '/')) {
    displayValue += e.target.innerText
    display.value = displayValue
    state = false
  }

  else if (e.target.innerText === 'AC') {
    displayValue = ''
    display.value = displayValue
    state = false
  }

  else if (
    !isNaN(Number(displayValue[displayValue.length - 1]))
    && e.target.innerText === '=') {
    displayValue = String(eval(displayValue))
    display.value = displayValue
    state = true
    }

  else if (state === true && !isNaN(Number(e.target.innerText))) {
  displayValue = '' + e.target.innerText
  display.value = displayValue
    state = false
  }
})





// Анимация

const centerX = window.innerWidth / 2 - buttons.offsetWidth / 2;
const centerY = window.innerHeight / 2 - buttons.offsetHeight / 2;

buttons.style.left = `${centerX}px`;
buttons.style.top = `${centerY}px`;

buttons.style.position = 'absolute';
buttons.style.transition = 'transform 0.3s ease';

let isDragging = false;
let startX = 0;
let startY = 0;

buttons.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  buttons.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  buttons.style.transform = `translate(${dx}px, ${dy}px)`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;


  buttons.style.transition = 'transform 0.3s ease';
  buttons.style.transform = 'translate(0, 0)';
});