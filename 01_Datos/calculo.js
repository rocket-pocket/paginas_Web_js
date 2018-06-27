function sumar(a,b){
    if (true){

    }
}

let num1 = '-2'
let num2 = 4.5
let resultado = sumar(num1, num2)
console.log(resultado)
resultado = restar(num1, num2) 
console.log(resultado)
resultado = multiplicar(num1, num2)
console.log(resultado)
resultado = dividir(num1, num2)
console.log(resultado)

/* let num1 = 22
let num2 = 43
let resultado = num1 + num2
console.log(resultado)
sumar() */


function restar(a,b){
    let resultado
    if (isNaN(a)) { resultado = "error"}
    else if (isNaN(b)) { resultado = "error"}
    else{
        resultado = a - b
    }
    return resultado
}

function multiplicar(a,b){
    let resultado
    if (isNaN(a)) { resultado = "error"}
    else if (isNaN(b)) { resultado = "error"}
    else{
        resultado = a * b
    }
    return resultado
}

function dividir(a,b){
    let resultado
    if (isNaN(a)) { resultado = "error"}
    else if (isNaN(b)) { resultado = "error"}
    else if (b == 0) {resultado = 'no se puede dividir por 0'}  //== compara
    else{
        resultado = a / b
    }
    return resultado
}