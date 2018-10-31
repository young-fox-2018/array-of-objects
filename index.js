var arr = []

function createObj(name, phase, gender){
    objStudent = {
      "name" : name,
      "phase" : phase,
      "gender" : gender
    }

    arr.push(objStudent)
}

createObj("Akbar", 1, "male")
createObj("Icha", 1, "female")
createObj("Adhit", 2, "male")
createObj("Tama", 2, "male")
createObj("Rifky", 3, "male")

console.log(arr)

console.log("")
console.log("----------GET DATA----------")

function getData(name){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]["name"] === name){
            return arr[i]
        }
    }
    return (`Data "${name}" tidak ditemukan`)
}

console.log(getData("Icha"))

console.log(getData("Anhar"))