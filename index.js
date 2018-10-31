
var arr = []

function createObjt(name,phase,gender){
    var obj = {name:"",phase:"",gender:""}
    obj.name = name
    obj.phase = phase
    obj.gender = gender

  arr.push(obj)
}

createObjt('Akbar',1,'male')
createObjt('Icha',1,'female')
createObjt('Adhit',2,'male')
createObjt('Tama',2,'male')
createObjt('Rifky',3,'male')

console.log(arr)

function GetData(input){
    for(var i = 0 ; i < arr.length; i++){
        //  console.log(arr[i])
         if(arr[i].name === input ){
             return arr[i]
         }
    }
}

console.log(GetData('Icha'))
console.log(GetData('Adhit'))