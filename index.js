var arr = []
function arrayObj(name, phase, gender) {
    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(obj)
}

arrayObj('Akbar', 1, 'male')
arrayObj('Icha', 1, 'female')
arrayObj('Adhit', 2, 'male')
arrayObj('Tama', 2, 'male')
arrayObj('Rifky', 3, 'male')

console.log((arr))

function getData (name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i]
        }
    }
}

console.log(getData('Icha'))


