var arr = []
const createObj = (name, phase, gender) => {
    let obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    arr.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
console.log(arr)