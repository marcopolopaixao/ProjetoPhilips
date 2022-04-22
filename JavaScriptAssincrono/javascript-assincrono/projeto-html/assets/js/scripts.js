const BASE_URL =  "https://thatcopy.pw/catapi/rest/" // constante criada para armazenar o enderço da API
const catBtn = document.getElementById('change-cat') // botão para atualizar a imagem
const catImg = document.getElementById('cat') // botão para obter a imagem

const getCats = async () => { // função para armazenar as informações obtidas da url
  try { // try/catch para tratamentos de erros
    const data = await fetch(BASE_URL) // constante para recebimento de dados
    const json = await data.json()  // json com as informações dos dados desejados

    return json.webpurl // retorno com o json desejado
  } catch (e) { // tratamento de erro
    console.log(e.message)
  }
}

const loadImg = async () => { //função assincrona criada para fornecer o caminho da imagem para o botão
  catImg.src = await getCats()
}
catBtn.addEventListener('click',loadImg)

loadImg()