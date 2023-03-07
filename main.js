

const btnClick = document.querySelector('#btnClick')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const buttonReset = document.querySelector('#buttonReset')

const phrases = document.querySelector('.phrasesOfCookie')

const phrasesOfCookie = [
  'Se alguém está tão cansado que não possa te dar um sorriso deixe-lhe o teu',
  'Procure acender uma vela em vez de amaldiçoar a escuridão'
]



const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 2)];
};

btnClick.addEventListener("click", toggleScreen);
buttonReset.addEventListener("click", toggleScreen);











