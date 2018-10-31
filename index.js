let arr = []
function createObj(_name, _phase, _gender) {
    let obj = {
        name: _name,
        phase: _phase,
        gender: _gender
    }
    arr.push(obj)
}
createObj('Akbar', 1, 'female')
createObj('Icha', 1, 'female')

function getData(name) {
    for (let i = 0; i < arr.length; i++) {
        if (name === arr[i].name) {
            return arr[i]
        }
    }
    return 'Not found'
}
console.log(getData('Icha'))

