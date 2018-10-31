
const arr = []
function createArrObject(name, phase, gender) {

    let obj = {
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(obj)
}

createArrObject('Akbar', 1, 'male');
createArrObject('Icha', 1, 'female');
createArrObject('Adhit', 2, 'male');
createArrObject('Tama', 2, 'male');
createArrObject('Rifky', 3, 'male');

function getData(name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i]
        }
    }
}

console.log(getData('Icha'))