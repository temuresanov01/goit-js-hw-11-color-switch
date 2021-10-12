const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let colorSwitchTimer = null;

refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  colorSwitchTimer = setInterval(colorSwitch, 1000);
}

function onClickStop() {
  refs.startBtn.removeAttribute('disabled', 'disabled');
  clearInterval(colorSwitchTimer);
}

function colorSwitch() {
  refs.body.style.backgroundColor = `${
    colors[randomIntegerFromInterval(0, colors.length - 1)]
  }`;
}