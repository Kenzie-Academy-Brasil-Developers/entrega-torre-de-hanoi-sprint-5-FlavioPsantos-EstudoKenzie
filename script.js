const torre = document.querySelectorAll('.torre')
const sectionTower = document.getElementById('torres')
const torreInicial = document.getElementById('torre1')
let takeDisc = undefined;
let countClick = 0;
let actualClick;
let tamanhoDiscoAtual = 0

let tamanho = 100
for (let i = 1; i <= 4; i++) {
    let disc = document.createElement('div')
    disc.className = 'disc'
    disc.id = 'disc' + `${i}`
    disc.style.width = `${tamanho}` + 'px'
    disc.style.height = '20px'
    torreInicial.appendChild(disc)
    tamanho -= 10;
}
sectionTower.addEventListener('click', function(e) {
    let actualTower = e.target
    if (actualTower.id === 'torres') {

    }
    console.log(actualTower)
    actualClick = document.getElementById(e.target.id)
    console.log(actualClick)

    console.log(e.target)
    if (actualTower.lastElementChild !== null && countClick === 0) {
        takeDisc = document.getElementById(actualTower.lastElementChild.id)
        tamanhoDiscoAtual = takeDisc.clientWidth
            // console.log(tamanhoDiscoAtual)
            // console.log(actualTower.lastElementChild)
        actualTower.removeChild(actualTower.lastElementChild)
        countClick = 1

    } else {
        if (countClick !== 0 && takeDisc !== undefined && actualTower.className === 'torre') {
            if (actualTower.lastElementChild === null || tamanhoDiscoAtual < actualTower.lastElementChild.clientWidth) {

                actualTower.appendChild(takeDisc)
                countClick = 0

            } else {
                alert('JOGADA INVÁLIDA')
            }
            if (actualTower.id !== torreInicial.id && actualTower.className === 'torre') {
                if (actualTower.childElementCount === 4) {
                    alert('VOCÊ GANHOU')
                }
            }
        }
        if (actualTower.lastElementChild === null) {
            alert('Torre inválida')
        }

    }




})