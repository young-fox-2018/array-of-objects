var arrObj = []
function createObj(name, phase, gender){
    var obj = {
        name : name,
        phase : phase,
        gender : gender
    }
    arrObj.push(obj)
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

function getData(name){
    for(let i = 0; i < arrObj.length; i++) {
        if(arrObj[i].name === name){
            return arrObj[i]
        }
    }
}
console.log(getData('Icha'))
// console.log(getData('Akbar'))