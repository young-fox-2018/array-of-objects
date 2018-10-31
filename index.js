let arr = []
function createObj(name, phase, gender) {
    arr.push(
        {
            name: name,
            phase: phase,
            gender: gender
        }
    )    
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

function getData(name) {
    for (let i = 0; i < arr.length; i++) {
        //ASSUME CASE SENSITIVE
        if (arr[i].name.toLowerCase() == name.toLowerCase()) {
            return arr[i]
        }
        
    }
}

console.log(getData("Icha"));
