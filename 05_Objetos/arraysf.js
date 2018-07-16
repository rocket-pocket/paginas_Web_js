let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'juan', 'dani']

for (let i = 0; i < aNombres.length; i++) { //FOR se suele usar para arrays
    const element = aNombres[i];
    console.log(`el usuario ${i+1} se llama ${element}`) //${i+1} hace que en la lista empieze desde 1
    
}

//FORIN -> **LO NORMAL ES USARLO PARA OBJETOS**
/* for (const key in object) { 
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
} */


/**
 * -------------------------------------------------------------
 * SIEMPRE QUE SE PUEDA PARA ''ARRAY'' HAY QYUE USAR .FOREACH / .MAP / ETC...
 * ************************************************************
  */

//.foreach -> puede tener tres parámetros : (item, i, array)
//se suele utilizar con funciones callback
aNombres.forEach(
    function(item, i){console.log(`el usuario ${i+1} se llama con el bucle for each se llama ${item}`)}
)

//El ejemplo de arriba convertido en arrow
aNombres.forEach(
    (item, i) => console.log(`el usuario ${i+1} se llama con el bucle for each se llama ${item}`)
)

//.foreach con array de números
let aNumbers = [2,5,7,6,8]
aNumbers.forEach(
    (item, i) => console.log(`el número ${i+1} es: ${item}`)
)

aNumbers.forEach(
    item => {
        let cuadrado = item*item
        console.log(`el cuadrado de : ${item} es: ${cuadrado}`)
    }
)


//.map -> devuleve un array
let aCuadrados = aNumbers.map(
    (item) => item*item  //=> (item) => {return item*item}
)

console.log(aCuadrados)

//Pregunta de examen como crear un clon con .map

let aNumbersClon = aNumbers.map(item => item)
console.log(aNumbersClon)//[ 2, 5, 7, 6, 8 ]

//para comprobar que es un clon independiente de aNumbres hacemos:
aNumbersClon.pop()
    console.log(aNumbersClon)//[ 2, 5, 7, 6 ] -> se ha eliminado el último número
    console.log(aNumbers)//[ 2, 5, 7, 6, 8 ]


//.filter -> tiene que ser boolean, llevando un condicional por ejemplo, en este ejemplo que remos que nos diga que números son pares
let aPares = aNumbers.filter(
    (item) =>{
        if (item % 2 == 0){
            return true
        }else{
            return false
        }
    }
)

//Impares con .filter
/* let aPares = aNumbers.filter(item => !(item % 2))
 */

let aImpares = aNumbers.filter(
    (item) => {return !!(item % 2)}
)

console.log(aPares)//[ 2, 6, 8 ] -> ha cogido los números pares
console.log(aImpares)//[5,7]


//.EVERY Y .SOME -> se utilizan para hacer comprobaciones
//¿son todos pares? con .every
let sonTodosPares = aNumbers.every(
    (item) => {return !!(item % 2)}
)
console.log(sonTodosPares)//false

//¿HAy algun par? con .some
let hayAlgunPar = aNumbers.some(
    (item) => {return !!(item % 2)}
)
console.log(hayAlgunPar)//true


//.REDUCE -> reduce el array a un único valor
let valorFinal = aNumbers.reduce(
    (a,b) => a + b
)
console.log(valorFinal)






    