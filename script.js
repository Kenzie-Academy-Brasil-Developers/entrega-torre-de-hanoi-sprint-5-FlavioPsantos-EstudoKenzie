const torre = document.querySelectorAll('.torre')
const sectionTower = document.getElementById('torres')
const torreInicial = document.getElementById('torre1')
let takeDisc = undefined;
let countClick = 0;
let actualClick;

let tamanho = 100
for (let i = 1; i <= 4; i++) {
    let disc = document.createElement('div')
    disc.className = 'disc' + `${i}`
    disc.id = 'disc'
    disc.style.width = `${tamanho}` + 'px'
    disc.style.height = '20px'
    torreInicial.appendChild(disc)
    tamanho -= 10;
}

sectionTower.addEventListener('click', function(e) {
    if (e.target.className === 'torre1') {

    }
})
for (let i = 0; i < torre.length; i++) {
    torre[i].addEventListener('click', function(e) {
        const actualTower = e.target
        actualClick = actualTower
        console.log(actualTower)
        if (e.target.lastElementChild !== null) {
            countClick = 1
        }
        if (countClick === 0) {
            alert('Torre vazia, clique em outra')
        } else {
            if (countClick === 1) {
                actualTower = e.target
                actualClick.appendChild(takeDisc)
            }
        }

    })
}

//criar variavel para armazenar disco
//primeiro click não pode ser em uma torre vazia 
//armazenar a torre clicada
//verificar qual é a proxima 
//se clicar em uma torre que não possui disco retornar jogada inválida 
//