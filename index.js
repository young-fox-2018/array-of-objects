function createObj(arr) {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        let obj = {
            name: arr[i][0],
            phase: arr[i][1],
            gender: arr[i][2]
        }
        data.push(obj)
    }
    return data
}

function getData(name) {
    let data = [["Akbar", 1, "male"], ["Icha", 1, "female"], ["Adhit", 2, "male"], ["Tama", 2, "male"], ["Rifki", 3, "male"]]
    let allData = createObj(data)
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].name === name) return allData[i]
    }
}
console.log(getData("Icha"));
