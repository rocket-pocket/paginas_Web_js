//OPERADORES

//x++-> ++ operador de POST incremento
let x = 23 //-> = asignación
console.log(x++)//++ no hara nada, lo incrementará luego //23
console.log(x) //++ -> 24
y = ++x //PRE INCREMENTO x= x+1->24 y luego y=x->24 por que x ya vale 24
y = x++ //POST INCREMENTO ->24
//X-- ->operadores de DECREMENTO ( funcionan igual que los anteriores)
y = --x
y = x--
function incrementos(){
    let x = 23

}
incrementos()
function asignaciones(){
    let x = 2

}
asignaciones()  


function esPar(num){
    let isPar = true //variable fuera del if para que a la hora de retornarlo decvuelva algo
    if (num % 2 != 0){
        isPar = false
    }
    return isPar
}
console.log('22 es Par?',esPar(22))
console.log('25 es Par?',esPar(25))



//falsy: false casting de booleans
//falsy
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

//truly
console.log(Boolean(true))
console.log(Boolean(106))
console.log(Boolean('pepe'))

let a = 'juan'
if ('pepe'){
    a = 'pepe'
}
console.log(a)

