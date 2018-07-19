/* 'use strict' */  //'use strict' -> hace que el sistema sea más estricto en este caso nos pide el let

let persona1 = {      //Creamos el objeto persona -> QUE ES LITERAL y por debajo se ejecuta new Object()
    nombre: 'pepe',
    edad : 33,
    profesion: 'Informatico',
    saludar: function(){ //creamos un método, la única menera de crearlo es con function
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad}`)
    }
}
persona1.saludar()//Hola, soy pepe y tengo 33
/* console.log(persona1.constructor) */

//ahora si quisiesemos crear más personas podriamos crearlas uno a uno o las podemos crear 
//con funciones contructoras
//LAS FUNCIONES CONTRUCTORAS SE ESCRTIBEN EN PASCAL CASE -> SOLO SE USAN EN DOS CASOS : FUNCIONES CONSTRUCTORAS Y CLASES
function Persona(x, y, z){
    this.name = x
    this.edad = y
    this.profesion = z
    this.saludar = function(){
        console.log(`hola soy ${this.name} tengo ${this.edad} y soy ${this.profesion}`)
    }
} 
let persona2 = new Persona('pepe',32, 'informatico')
persona2.saludar()


let persona3 = new Persona('luisito',23, 'panadero')
