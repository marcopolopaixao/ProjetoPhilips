const bolso = document.querySelector('.bolso')//acessa e armazena o estilo css class
const background = document.querySelector('.background') //acessa e armazena o estilo css class

let isJumping = false 
let isGameOver = false;
let position = 0 // posição onde o bolsossauro irá ficar na tela 

function handleKeyUp(event) {
  if (event.keyCode === 32) { // o numero keycode indica qual tecla foi pressionada no teclado 
    if (!isJumping) { // verifica se o bolso está pulando
      jump() // ao pressionar a tecla space aciona a função jump. 
    }
  }
}

function jump() {
  isJumping = true // quando a tecla space é pressionada a variavel isJumping receberá o valor true
 
  let upInterval = setInterval(() => { //setInterval repete o código a cada intervalo indicado. indicamos 20
    if (position >= 175) {// o teste lógico irá verificar a altura em q o bolso está na tela, enquanto falso ele continua subindo
      clearInterval(upInterval) // serve para interromper setInterval e fazer com que o bolso pare de subir
      //descendo
      let downInterval = setInterval(() => {// depois que o bolso parar de subir ele tem que começar a descer
        if (position <= 0) {// o teste verifica se o bolso chegou na posição zero para que ele não desapareça da tela 
          clearInterval(downInterval) // a função interrompe a descida do bolso
          isJumping = false //Como o bolso parou de pular, isJumping retorna para false. 
        } else {// se a posição ainda não estiver em 0, ele vai diminuindo 20. 
          position -= 20
         bolso.style.bottom = position + 'px'
        }
      }, 20)
    } else {
      //subindo
      position += 20
     bolso.style.bottom = position + 'px'
    }
  }, 20)
}

function createMinions() {
  const minions = document.createElement('div') //cria o elemento cacto
  let minionsPosition = 1000
  let randomTime = Math.random() * 6000

  if (isGameOver) return;

  minions.classList.add('minions'); //cria uma classe css
  background.appendChild(minions)
  minions.style.left = 1000 + 'px'
  

  let leftInterval = setInterval(() => {
    if (minionsPosition < -60) {
      clearInterval(leftInterval)
      background.removeChild(minions)
    } else if (minionsPosition > 0 && minionsPosition < 60 && position < 60) {
      clearInterval(leftInterval)
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'

    } else {
      minionsPosition -= 10
      minions.style.left = minionsPosition + 'px'
    }
  }, 20)
  setTimeout(createMinions, randomTime)
}

createMinions()

document.addEventListener('keyup', handleKeyUp)// capta o pressionamento de uma tecla