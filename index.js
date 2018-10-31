var arr = [];

function createObj(name, phase, gender){
    var result = {
        name: name,
        phase: phase,
        gender: gender,
    }
    arr.push(result)
}



createObj("Akbar",1,"male")
createObj("Icha",1,"female")

console.log(arr)

function getData(name){
    var result;

    for(var i = 0; i < arr.length; i++){
        if (arr[i]["name"] === name){
            result = arr[i]
        }
    }

    return result
}

console.log(getData("Icha"))
console.log ('ok')