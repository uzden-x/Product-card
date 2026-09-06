// import './homework-7.js';
// import './homework-8.js';
// import './homework-9.js';
// import './homework-10.js';
 import './homework-11.js';
 import './homework-12.js'
// import './comments.js';


document.addEventListener('DOMContentLoaded', () => { 

// Покраска всех карточек

const productCards = document.querySelectorAll('.products__item');
const changeColorAllCardButton= document.querySelector('#change-color-all-card');
const greenColor = '#00ff00';
const blueColor = '#1100ff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColor);
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.products__item');
const changeColorFirstCardButton= document.querySelector('#change-color-first-card');
 
changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColor;
});

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener( 'click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы внатуре хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com');
  }
  else {
    return;
  }
};

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
  console.log(message);
  alert(10);
};
  

//Вывод лога заголовка

const outputTitle = document.querySelector('#title-console');

outputTitle.addEventListener('mouseover', () => {
  console.log(outputTitle.textContent);
});


//Кнопка, меняющая цвет

const buttonToggle = document.querySelector('#toggle-color-button');

buttonToggle.addEventListener('click', () => {
  buttonToggle.classList.toggle('button-blue');
});


})