const arr = []

//RELEASE 0
function createObj(name, phase, gender) {
    const obj = { name: name, phase: phase, gender: gender }
    arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Jessica', 3, 'female')

console.log(arr)
console.log('')

// RELEASE 1
function getData(name) {
    let result = ''
    arr.forEach(function (data) {
        if (name === data.name) {
            result = data
        }
    })
    return result
}

console.log(getData('Jessica'))