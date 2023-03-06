

const btn = document.querySelector('#btn')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const phrases = document.querySelector('.phrasesOfCookie')

const button = document.querySelector('#button')

const phrasesOfCookie = [
  'Se alguém está tão cansado que não possa te dar um sorriso deixe-lhe o teu',
  'Procure acender uma vela em vez de amaldiçoar a escuridão'
]


btn.addEventListener('click',btnClick)


function btnClick() {
  document.querySelector(".screen1").classList.add("hide");
  document.querySelector(".screen2").classList.remove("hide");
  phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 2)]
}





