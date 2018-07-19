//fORMAS DE CREAR FUNCIONES

//DECLARACIÓN(forma 1)
function suma1(a,b){
    return a + b
}

//ASIGNACIÓN(forma 2)
let suma2 = function(a, b ){
    return a + b
}

console.log(suma1(5,6), suma2(4,8))

//ES6 -> FUNCIONES 'ARROW' O 'LAMBDAS' : es una forma especial de asignación
//vienen uy bien para funciones cortitas
let suma3 = (a,b) => {
    return a + b 
}

let suma3b = (a, b) => a + b /** (cuando es solo una linea de código
                                 se puede obviar las llaves y podemos prescindir del
                                 return por que se sobreentienden) */
                                 
let suma3c = a => a * b /**cuando solo hya un parámetro se pueden suprimir los 
                        parentesis  */                                