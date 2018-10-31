var res = []

function createObj(name,phase,gender){
    let obj = {}
    obj.name = name
    obj.phase = phase
    obj.gender = gender
    res.push(obj)
    return res
}

// console.log(createObj("Akbar", 1, "male"));
// console.log(createObj("Icha", 1, "female"));
createObj("Akbar", 1, "male")
createObj("Icha", 1, "female")


function getData(name){
    for(let i = 0 ; i < res.length ; i++){
        if (res[i]["name"] === name){
            return res[i]
        }
    }
}

console.log(getData("Akbar"));
console.log(getData("Icha"));