function basica(x){
    console.log(x)
}
let y = 12
basica(y)


function miFunction(...z){//Spread operator -> ... los tres puntitos recoge todos los argumentos en un array (z-> nombre d Array) es un array
    console.log('Hola ' +z[0])//Hola 21
    console.log('Hola' + arguments[0])//Hola21 //arguments[0] -> hace lo mismo que ... es un pseudoArray
}
let x = 21
miFunction(x)
miFunction(x, 56)
console.log(x, 56)
miFunction(x, 56, 89 )