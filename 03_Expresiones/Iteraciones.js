//Iteraciones (repetir, iterar)
//for
//while
//do


function iterar(){
    
    for (let i = 0; i < 3; i++) {
        console.log(`soy la vuelta ${i}`)
        
    }

}
function iterarReves(){
    
    for (let i = 3; i > 0; i--) {
        console.log(`soy la vuelta ${i}`)        
    }

}
iterar()
iterarReves()

// Números factoriales Producto de un número por todos los que le preceden
// 5! = 5 *4 * 3 * 2 * 1
// 5! = 1 * 2 * 3 * 4 * 5

/* (Referencia de una función)
   -> @param num: number
   -> @return factorial: number
*/

function factorial(num){
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        //operaciones
        factorial = factorial * i
        
    }
    return factorial
}

console.log(factorial(5))//120

function factorialInversa(num){
    let factorial = 1
    for (let i = num; i > 0; i--) {
        //operaciones
        factorial = factorial * i
        
    }
    return factorial
}

console.log(factorialInversa(5))//120

function totalizar(aDatos){
    let num = 0
    for (let i = 0; i < aDatos.length; i++) {
        num += aDatos[i];
        
    }
    return num
}

aDatos = [2,5,6,7,8]
console.log(`El total es ${totalizar(aDatos)}`)

function leerArray(aDatos){
    let r =  ''
    for (let i = 0; i < aDatos.length; i++) {
        r  += `El usuario ${i+1} es aDatos[i];`
        
        
    }

}

let aNombres = ['Pepe', 'maria', 'Rosa', 'javier']
console.log(totalizar)