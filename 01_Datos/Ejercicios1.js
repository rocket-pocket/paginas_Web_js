//Función que salude primero a Pepe y lueo a María
function saludar(pUser){
    const SALUDAR = 'Hola' //Constante
    console.log(SALUDAR, pUser)
    let autor = 'María'
    console.log(SALUDAR, autor)
}

saludar('Pepe')//Hola Pepe
               //Hola María

//**********************************

//Sumar 10 + 6
function sumar(a,b){
    let resultado = a + b
    console.log(resultado)
}

sumar(10, 6)//16

//**********************************

//Función que multiplique 10 * 10 y le reste 80
function calculo(a, b, c) {
    let multi = a * b
    let rest = c
    let resultado = multi - rest    
    console.log(resultado)
}

calculo(10, 10, 80)//20

//**********************************

//Función con condicional que dependa del número por el que se divida
function dividir(a,b){
    let division
    if (b != 0){
        division = a / b
    }
    else{
        division = 'No se puede dividir por 0'
    }
    console.log(division)
}

dividir(4,2)//2
dividir(4,0)//'No se puede dividir por 0'

//**********************************

//Calcular el área de una esfera
function area(a,b){
    let radio = a
    let area = Math.PI
    let resultado = area * (radio * radio)
    console.log(resultado)
}

area(4,2)//50.26...

//**********************************

