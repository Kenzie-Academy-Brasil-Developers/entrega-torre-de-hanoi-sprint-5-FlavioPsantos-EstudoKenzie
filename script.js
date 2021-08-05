const torre = document.querySelectorAll('.torre')
const sectionTower = document.getElementById('torres')
const torreInicial = document.getElementById('torre1')
let takeDisc = undefined;
let countClick = 0;

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
        let actualTower = e.target
        console.log(actualTower)
        if (e.target.lastElementChild !== null) {
            countClick = 1
        }
        if (countClick === 0) {
            alert('Torre vazia, clique em outra')
        } 
        else {
            if (e.target.lastElementChild === null) {
            
            }
        }
    })
}
// sectionTower.addEventListener('click', function(evet) {
//     if (evet.target.className === 'torre1') {

//     }
// })
// sectionTower.addEventListener('click', function(evet) {
//     if (evet.target.className === 'torre2') {
       
//     }
// })
// sectionTower.addEventListener('click', function(evet) {
//     if (evet.target.className === 'torre3') {

//     }
// })

function victory(){
    if(torreResult === disc1,disc2,disc3,disc4){
        let vict = document.createElement('div')
        let text = document.createTextNode('Você ganhou!!')
        vict.appendChild(text)
        main.appendChild(vict)
    }   
}