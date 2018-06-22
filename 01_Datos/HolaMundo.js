//Declaración: var saludo -> Esta variable esta creada pero es undefined

 //todas las palabras reservadas van con minusculas

                                        /* En JavaScript hay 5 TIPOS DE DATOS
                                            -STRING
                                            -NUMBER
                                            -BOOLEANS (TRUE / FALSE)
                                            -OBJECT (TODO LO QUE NO SEA NINGUNO DE LOS TRES ANTERIORES)
                                            -UNDEFINED
                                        */           
/* Inicialización: saludo = hola */

//TIPOS DE DATOS
/* declaracion + inicialización */
var saludo = 'Hello'
var nombre = 'Pepe'
var user = 'Mundo'//STRING
var edad = 23 //NUMBER
var isEstudiante = true // BOOLEAN
var algo //UNDEFINED
var persona = {  //Objeto en notacion JSON (JavaScript Object Notasion)
    nombre: 'Juan',
    edad: 23,
    isEstudiante: true
}

console.log(saludo, user)
console.log(nombre)
console.log(persona)
console.log(isEstudiante)
console.log(persona, typeof nombre)
console.log(persona.nombre)
console.log(saludo + nombre + persona.edad/2)

/* 
COMO ES JS RESPECTO A LOS TIPOS-------------
 -> Devil (tiene una estructura más flexible, un ejemplo es que podemos crear var undefined,                mientras que otros lenguajes hay que definir todo)
 -> Dinamico (puedes cambiar de tipo)

*/

                    