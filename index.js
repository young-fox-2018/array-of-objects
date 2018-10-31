var arr = [];
function createObj(name, phase, gender) {
    var result = {name: name, phase: phase, gender: gender};
    return arr.push(result);
}
createObj('Akbar', 1, 'male');
createObj('icha', 1, 'female')

console.log(arr);