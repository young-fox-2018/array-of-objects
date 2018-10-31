var arr = []

function createObj (name, phase, gender){
    obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(obj)
}

function getData(name){
    let element = arr.filter(item => item.name === name)
    return element
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr)
console.log(getData('Icha'))