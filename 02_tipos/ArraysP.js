/* let aDatos = ['Pepe', 'Rosa', 'Maria']

console.log(typeof aDatos, aDatos)
aDatos[0] = 'Jose'
console.log(aDatos)
aDatos[aDatos.length]='Luis'
aDatos.push('Elena')
console.log(aDatos) */

let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'}
]

aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
aDatosFull[0].apellidos = "Perez"
aDatosFull[1].apellidos = "Lopez"

console.log(aDatosFull)