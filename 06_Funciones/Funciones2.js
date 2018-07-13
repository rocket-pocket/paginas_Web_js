// Declarar
function miFuncion(x) {
    console.log(x)//23
}
function calcular(x) {
    return 2*x
}

// Declarar & Asignar
let x = 23

// Invocar, llamar, ejecutar
miFuncion(23)

// Asignando el resultado de invocar ...
let z = calcular(12)

// OTRA FORMA DE CREAR FUNCIONES EN JS
// function otraFuncion () {}

/* {
    user: 'Pepe', //Objeto anónimo , se puede usar para pasar parámetro a una función
    edad: 22
} */


let otraFuncion = function (x,y) {//es un afunción anónima que se asigna a una variable
    return x*y
} 

function hazCalculos(x, y, operacion){
    console.log(operacion(x,y))
}
//callback anónimo
hazCalculos(3, 5, function(a,b){return a* b })//15

//CALL BACK CON NOMBRE
function sumarCuadrados(x,y){
    return x*x + y*y
}

//volvemos a ejecutar hazCalculos //sumarCuadrados es un afuncion que le pasamos a hazcalculos como tercer parametro
hazCalculos(3, 5, sumarCuadrados)//34

function sumarCubos(a,b){
    return a*b+ a*b
}
hazCalculos(4, 4, sumarCubos)//32

//setTimeout
setTimeout(
    function(){
        console.log('han pasado 3 segundos')//han pasado 3 segundos
    }, 3000
)
 

function saludar(){
    console.log('hola')//hola -> cada 3 segundos infinitamente, se pararía con un handler
}

setInterval(saludar, 3000 )