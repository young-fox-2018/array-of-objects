let ledger = []
function arrayOfObject (name, phase, gender) {
    let biodata = {}
    biodata.name = name
    biodata.phase = phase
    biodata.gender = gender
    ledger.push(biodata)
}

arrayOfObject('Akbar',1,'male')
arrayOfObject('Icha',1,'female')

console.log(ledger)


function getData(name) {
    for (let i = 0; i < ledger.length; i++) {
        if (ledger[i].name === name) return ledger[i]
    }
}

console.log(getData('Icha')) 