var arr = []

function createObj (name, phase, gender) {
    var object = {
        'name' : name,
        'phase' : phase,
        'gender' : gender
    }
    arr.push(object)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 1, 'male')
createObj('Tama', 1, 'male')
createObj('Rifky', 1, 'male')

function getData (name) {
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].name === name) {
           return arr[i]
       }
    }
    return 'Nama tidak ditemukan'
}

console.log(arr)
console.log(getData('Icha'))