var arr = []

function createObj(name, phase, gender){
  var obj = {name: '' , phase: 0 , gender: ''}

    obj.name = name ;
    obj.phase = phase;
    obj.gender = gender;
  
    arr.push(obj)
}

createObj('Akbar' , 1 , 'male' );
createObj('Icha' , 1 , 'female' );
createObj('Adhit' , 2 , 'male' );
createObj('Tama' , 2 , 'male' );
createObj('Rifky' , 3 , 'male' );

console.log('--- REALEASE 0 ---' )
console.log(arr)
console.log('\n')

function getData(name) {
  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i].name === name){
      return arr[i]
    }
  }
}

console.log('--- RELEASE 1 ---')
console.log(getData('Icha'))
console.log('\n')
