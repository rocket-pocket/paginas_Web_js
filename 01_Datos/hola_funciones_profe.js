/*
  JavaScript (@Oracle) -> ECMAScript -> ES6 / ES2015
 */

 // variable global -> hiting
 // let autor = 'Alejandro'

 function saludar(pUser) {
    const SALUDO = 'Hola'
    console.log(SALUDO, pUser)
    // variable local a la función
    let autor = 'Alberto'
     console.log('Dentro', autor)
}


function sumar(a,b) {
    let resultado = a + b
    console.log(resultado)
}

function dividir (a,b) {
    let resultado
    if (b != 0) {
         resultado = a / b 
    } else {
        resultado = 'No se puede dividir por 0'
    }
    console.log(resultado)
}


saludar('Pepe')
saludar('Elena')
sumar(2,4)
dividir(4,2)
dividir(4,0)
