var arr = []
function createObj(name, phase, gender) {
    var bcd = 1
    arr.push(
        {
            name : name,
            phase: phase,
            gender: gender
        }
    )

    return arr
}

function getData (name) {
    for ( i in arr) {
        if (arr[i].name == name) {
            return arr[i]
        } 
    }

    return - 1
}

function run() {
    console.log(a)
    let a = 1;
}

createObj("robert", 1, "male")
createObj("sonto", 1, "female")
createObj("anton", 1, "male")
console.log(createObj("stephanie", 1, "female"))
console.log(getData("anton"))