//ARRAYS

/* let aDatos = {
    0: 'Pepe',
    1: 'Rosa',
    2: 'Maria',
} */

let aDatos = ['Pepe','Rosa','Maria'] //esto es un ARRAY

console.log(typeof aDatos, aDatos)
//manipular un array
aDatos[0] = 'jose'
console.log(aDatos)
//para añadir mas nombres hay un truco
aDatos[aDatos.length] = 'luis'
console.log(aDatos) +
//este es más elegante
aDatos.push('elena')
console.log(aDatos)

//
let aDatosFull = [
    {nombre: 'Pepe', puesto:'profesor'},//elemnto de tipo objeto
    {nombre: 'Rosa', puesto:'profesora'},//elemnto de tipo objeto
    {nombre: 'Maria', puesto:'Directora'},//elemnto de tipo objeto
   
]

console.log(aDatosFull)
aDatosFull.push({nombre: 'Elena', puesto: 'alumna'})//añadir a la lista 
aDatosFull[0].apellidos = 'perez'//añadir apellidos
aDatosFull[1].apellidos = 'lopez'
console.log(aDatosFull)

function sumar() {
    
}

prueba = {}
if (typeof prueba == 'object'){
    prueba.estoyLoco = 'si'
}
console.log(typeof sumar, prueba)