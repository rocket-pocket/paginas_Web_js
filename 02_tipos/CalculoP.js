function sumar(a, b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = Number(a) + Number(b)
        // resultado = +a + +b
        // resultado = parseFloat(a) + parseFloat(b)
    }
    return resultado
}

function restar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a - b
    }
    return resultado
}

function multiplicar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a * b
    }
    return resultado
}

function dividir(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else if (b == 0) { resultado = "No se puede dividir por 0"}
    else {
        resultado = a / b
    }
    return resultado
}

function calcularModulo(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a % b
    }
    return resultado
}



let num1 = '-2'
let num2 = 4.5
let resultado = sumar(num1, num2)
console.log(resultado)
resultado = restar(num1, num2)
console.log(resultado)
resultado = multiplicar(num1, num2)
console.log(resultado)
resultado = dividir(num1, 0)
console.log(resultado)
resultado = calcularModulo(num2, num1)
console.log(resultado)
// console.log(sumar(num1, num2))

