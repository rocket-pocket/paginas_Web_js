function operar(){
    let num1 = '22'
    console.log(typeof num1)
    let num2 = '2'//(aunque num2 es un string al ponerle un operador 
                  //entiende que lo que quieres es que saque números, ocurre con todos los operadores
                  //excepto con la suma +)
    console.log(typeof num2)
    let resultado = num1 * num2
    console.log(typeof resultado)
    console.log(resultado)
    let name = 'pepe'
    let name2 = 'juan'
    let resultado1 = name * name2
    console.log(resultado1, typeof resultado1)


    console.log(isNaN(num2)) //isNaN pregunta si es NaN lo qu devuelve -> TRUE O FALSE
    console.log(isNaN(resultado1))
}
operar()