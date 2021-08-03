for (let i = 1; i <= 3; i++) {
    let sectionTower = document.getElementById('torres')
    let tower = document.createElement('div')
    let vareta = document.createElement('div')
    vareta.className = 'vareta' + `${i}`;
    tower.className = 'torre' + `${i}`;
    sectionTower.appendChild(tower)
    tower.appendChild(vareta)
    if (i === 1) {
        geraDisco(tower)
    }
}

function geraDisco(tower) {
    for (let i = 1; i <= 5; i++) {
        let disc = document.createElement('div')
        disc.className = 'disc' + `${i}`
        disc.id = 'disc'
        tower.appendChild(disc)
    }
}