/*tipos de datos
    ELEMENTALES
        -number
        -string
        -booleans
    REFERENCIADOS
        -object
    
-undefined
*/

//TIPOS ELEMENTALES 
//SON INMUTABLES
//SE UTILIZAN POR VALOR

function aumentar(pIndice){
     pIndice += 1
     return pIndice
}
let indice = 1
indice = 2

aumentar(indice)
console.log(indice)

//TIPOS REFERENCIADOS
//SON INMUTABLES
//SE UTILIZAN POR REFERENCIAS

//esto es un object

let oLibro = {
    titulo: 'lotr',
    indice: 1,
    loTengo: true,
    autor: {
        nombre: 'J.R',
        apellido: 'tolkien',
        isVivo: true,
    }

}
oLibro.loTengo.isVivo
console.log(typeof oLibro)

//Operaciones elementales

let a = 5
let b = a
a += 5
console.log(a)//10
console.log(b)//5

oLibro2 = oLibro
oLibro.indice = 2
console.log(oLibro2)