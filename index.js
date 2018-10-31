var people = []

function createObj(name, phase, gender){
    people.push({name:name, phase: phase, gender: gender})
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(people)

function getData(name){
    for(let i = 0; i < people.length; i++){
        if(people[i].name === name){
            return people[i]
        }
    }
}

console.log(getData('Icha'))