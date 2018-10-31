var arr = []
function createObj (name, phase, gender) {
    let obj = {}

    obj.name = name
    obj.phase = phase
    obj.gender = gender

    arr.push(obj)
}

function getData (name) {
    for (let i =0; i < arr.length; i++) {
        for (key in arr[i]) {
            if (arr[i][key].toString().toLowerCase() === name.toString().toLowerCase()) {
                return arr[i]
            }
        }
    }

    return 'Not found'
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')



console.log(arr)
console.log(getData('Icha'))