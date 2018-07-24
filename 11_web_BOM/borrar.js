let oPersona = {
    nombre:'pepe',
    edad: 23,
    empresa: 'IBM',
}
console.log(oPersona)

oPersona.empresa = ''//han despedido a pepe 
console.log(oPersona)
delete(oPersona.empresa)//borra la propiedad
console.log(oPersona)

let x  
console.log(typeof x)

if(x === null){
    console.log('x es null')//para saber si una propiedad es null
}
else{
    console.log('x ha dejado de ser null')
}