const sectionTower = document.getElementById('torres')
for (let i = 1; i <= 3; i++) {
    let tower = document.createElement('div')
    let vareta = document.createElement('div')
    vareta.className = 'vareta' + `${i}`;
    tower.className = 'torre' + `${i}`;
    sectionTower.appendChild(tower)
    tower.appendChild(vareta)
    if (i === 1) {
        geraDisco(vareta)
    }
}

function geraDisco(vareta) {
    let tamanho = 40
    let discos = [];
    for (let i = 1; i <= 4; i++) {
        let disc = document.createElement('div')
        disc.className = 'disc' + `${i}`
        disc.id = 'disc'
        disc.style.width = `${tamanho}` + 'px'
        discos.push({ disc: tamanho })
        vareta.appendChild(disc)
        tamanho += 20;
    }
}
// //função para interceptar o evento de clique no disco
// let disco = sectionTower.firstElementChild
// for(let i = 0; i < disco.length; i++){
//     disco[i].addEventListener('click', select)
    
// }
// console.log(disco)
// //função para indicar o que fazer com o disco após o clique
// //retirar o disco da vareta em que ele estar
// //no segundo clique em uma vareta, por o disco selecionado anteriormente
// function select(){
//     console.log("select")    
// }

//por o clique no primeiro filho de vareta1
const torreResult = document.getElementsByClassName('torre3')
const disc1 = document.getElementsByClassName('disc1')
const disc2 = document.getElementsByClassName('disc2')
const disc3 = document.getElementsByClassName('disc3')
const disc4 = document.getElementsByClassName('disc4')

sectionTower.addEventListener('click', function(evet) {
    if (evet.target.className === 'torre1') {
        console.log('verdade')
    }
})
sectionTower.addEventListener('click', function(evet) {
    if (evet.target.className === 'torre2') {
        console.log('verdade2')
    }
})
sectionTower.addEventListener('click', function(evet) {
    if (evet.target.className === 'torre3') {
        console.log('verdade3')
        if(torreResult === disc1,disc2,disc3,disc4){
            let vict = document.createElement('div')
            let text = document.createTextNode('Você ganhou!!')
            vict.appendChild(text)
            sectionTower.appendChild(vict)
        }   
    }
})
