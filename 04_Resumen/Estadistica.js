//ejercicio 6

/* function media(a, b, c){
    return (a + b + c) / 3
}

console.log(media(2, 4, 6)) */

function mediaArray(aDatos){
    let suma = 0 //siempre fuera del blucle
    for (let i = 0; i < aDatos.length; i++) {// la variable i -> indica las vueltas
        suma = suma + aDatos[i]
        /* const element = aDatos[i];  va guardando los elemntos del array*/
        
    }
    return suma / aDatos.length
}

function mediaArg(){
    console.log(arguments)// arguments es similar a un array donde se almacenan todos los parametros que recibe una funcion coincidan o no con los que tiene definidos
}

function mediaSpread(...aDatos){ //es un enmascaramiento convierte lo que le llega en un array
    let suma = 0 
    for (let i = 0; i < aDatos.length; i++) {
        suma = suma + aDatos[i]        
    }
    return suma / aDatos.length

}

function calculaEstadisticas(operacion,...aDatos ){//este es un ejemplo par ver que el spread no tiene por que ser el único
    ///falta, esta función se queda sin hacer
}

console.log(mediaArray([2,4,6,8,12]))
console.log(mediaArg(2,4,5,6,9))
console.log(mediaSpread(2,4, 5, 8))

console.log(calculaEstadisticas('varianza', 2,5,6,12))