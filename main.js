'use strict'

const funcionarios = [
    //JSON
    {
        nome: 'Maria Souza',
        cargo: 'Designer',
        imagem: 'maria.jpg'
    },
    {
        nome: 'João SIlva',
        cargo: 'DBA',
        imagem: 'joao.jpg'
    },
    {
        nome: 'Hugo Pereira',
        cargo: 'FrontEnd',
        imagem: 'hugo.jpg'
    },
    {
        nome: 'Ana Maria',
        cargo: 'BackEnd',
        imagem: 'ana.jpg'
    }
]

function criarCards(funcionario){
    const container = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`  
    imagem.alt = funcionario.nome

    const divContainer = document.createElement('div')

    const nome = document.createElement('h2')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    divContainer.replaceChildren(nome,cargo)          //appendchild em uma linha só

    card.replaceChildren(imagem, divContainer)

    container.appendChild(card)

}
 
funcionarios.forEach(criarCards)                  //pega elemento por elemento e envia para a função




