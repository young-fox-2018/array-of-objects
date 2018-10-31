var arr = []

function createObj (name, phase, gender) {
    return arr.push({
        name:name,
        phase:phase,
        gender:gender
    })
}

function getData (name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            return arr[i]
        }
    }
    return "name not found!"
}


// test caase
createObj("vicky", "1","male")
createObj("srah", "1","female")
console.log(arr)

// cari orang
console.log(getData("vicky"))
// cari orang yang tidak ada
console.log(getData("vickky"))

