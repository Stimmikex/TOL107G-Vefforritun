import question from './question';
import helpers, { empty, el } from './helpers'; /* disable-eslint-line */
import { score } from './highscore';

// todo vísa í rétta hluti með import

// allar breytur hér eru aðeins sýnilegar innan þessa módúl

let startButton; // takki sem byrjar leik // element sem heldur utan um verkefni, sjá index.html
const problem = document.querySelector('.problem');
const resultText = document.querySelector('.result__text');
const resultDiv = document.querySelector('.result');
let result; // element sem heldur utan um niðurstöðu, sjá index.html
let resultButton;
let name;

let playTime; // hversu lengi á að spila? Sent inn gegnum init()
let total = 0; // fjöldi spurninga í núverandi leik
let correct = 0; // fjöldi réttra svara í núverandi leik
let currentProblem; // spurning sem er verið að sýna
let points = 0;
let i = 0;
const arr = [i];

/**
 * Klárar leik. Birtir result og felur problem. Reiknar stig og birtir í result.
 */
function finish() {
  points = score(correct, total, playTime);
  const text = `Þú svaraðir ${correct} rétt af ${total} spurningum og fékkst ${points} stig fyrir. Skráðu þig á stigatöfluna!`;
  const par = document.createElement('p');
  par.innerHTML = text;
  resultText.appendChild(par);
  problem.classList.add('problem--hidden');
  resultDiv.classList.remove('result--hidden');
  // todo útfæra
}

/**
 * Keyrir áfram leikinn. Telur niður eftir því hve langur leikur er og þegar
 * tími er búinn kallar í finish().
 *
 * Í staðinn fyrir að nota setInterval köllum við í setTimeout á sekúndu fresti.
 * Þurfum þá ekki að halda utan um id á intervali og skilum falli sem lokar
 * yfir fjölda sekúnda sem eftir er.
 *
 * @param {number} current Sekúndur eftir
 */
function tick(current) {
  // todo uppfæra tíma á síðu
  // playTime = 10;
  // playTime = setTimeout(tick(current - 1), 1000);
  const div = document.querySelector('.problem__timer');
  div.textContent = current;

  if (current <= 0) {
    return finish();
  }

  return () => {
    // const p = document.createElement('p');
    setTimeout(tick(current - 1), 1000);
    // div.appendChild(p);
    // console.log(setTimeout(tick(current - 1), 1000));
  };
}

/**
 * Býr til nýja spurningu og sýnir undir .problem__question
 */
function showQuestion() {
  empty(document.querySelector('.problem__question'));
  const div = document.querySelector('.problem__question');
  const p = document.createElement('p');
  currentProblem = question();
  p.innerHTML = currentProblem.problem;
  // let svar = quest.answer;
  div.appendChild(p);
  startButton = document.querySelector('button');
  startButton.classList.add('button--hidden');
  // problem = document.querySelector('.game').lastChild.classlist.remove('problem--hidden');
  problem.classList.remove('problem--hidden');
  // if(quest.answer === ) {

  // }
  // todo útfæra
}

/**
 * Byrjar leik
 *
 * - Felur startButton og sýnir problem
 * - Núllstillir total og correct
 * - Kallar í fyrsta sinn í tick()
 * - Sýnir fyrstu spurningu
 */
function start() {
  setTimeout(tick(playTime), 1000);
  showQuestion();
  // todo útfæra
}

/**
 * Event handler fyrir það þegar spurningu er svarað. Athugar hvort svar sé
 * rétt, hreinsar input og birtir nýja spurningu.
 *
 * @param {object} e Event þegar spurningu svarað
 */
function onSubmit(e) {
  e.preventDefault();
  total += 1;
  const inputAnswer = document.querySelector('.problem__input');
  const inputAnswertmp = parseInt(inputAnswer.value, 10);
  // console.log('Input: '+inputAnswertmp);
  // console.log('Answer: '+currentProblem.answer);
  if (inputAnswertmp === currentProblem.answer) {
    correct += 1;
  }
  // console.log(correct);
  showQuestion();
  inputAnswer.value = '';
  // todo útfæra
}

/**
 * Event handler fyrir þegar stig eru skráð eftir leik.
 *
 * @param {*} e Event þegar stig eru skráð
 */
function onSubmitScore(e) {
  e.preventDefault();
  const nameInput = document.querySelector('.result__input');
  name = nameInput.value;
  // console.log("name: "+name);
  arr[i] = localStorage.setItem('name', name);
  i += 1;
  localStorage.setItem('value', points);
  // console.log('Skila nafni');

  // todo útfæra

  resultDiv.classList.add('result--hidden');
  problem.classList.add('problem--hidden');
  startButton.classList.remove('button--hidden');
}

/**
 * Finnur öll element DOM og setur upp event handlers.
 *
 * @param {number} _playTime Fjöldi sekúnda sem hver leikur er
 */
export default function init(_playTime) {
  playTime = _playTime;
  startButton = document.querySelector('.button');
  startButton.addEventListener('click', start);
  result = document.querySelector('.problem__answer');
  result.addEventListener('submit', onSubmit);
  resultButton = document.querySelector('.result__form');
  resultButton.addEventListener('submit', onSubmitScore);
  // todo útfæra
}
