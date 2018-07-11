// let oDatos = {}
// let oDatos = {
//     edad: 22
// }
// let oDatos2 = new Object()
// oDatos.nombre = 'Pepe'
// oDatos['apellido'] = 'Perez'

let oDatos = {
    nombre: 'Pepe',
    apellidos: 'Pérez',
    edad: 22
}

oDatos.profesion = 'programador'

console.log(oDatos)

let x = 22
x *= 2
console.log(oDatos.edad *= 3)

let flight = {
    nombre: 'Oceanic',
    numero: '815',//no es un número es un identificador por eso es un string
    departure:{
        clave_IATA: 'SYD',
        time: '2004-09-02 14:55',
        ciudad:'SYDNEY'
    },
    arrival:{
        clave_IATA: 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Angeles'
    }


}

flight.arrival.ciudad = 'Los Angeles'//nos hemos equivocado arriva y para añadir más datos hacemos esto
console.log(flight)

function leeObjeto(oDatos){
    for (const key in flight) { //es el nombre de una variable
    //4º 
    if (typeof oDatos[key] === 'object') {
        console.log(`las propiedades de ${key} son:`)
        leeObjeto(flight[key])
        
    }else{//5º
        console.log(`la propiedad ${key} vale ${flight[key]}`)
    //flight[key] ->flight[key] key entre corchetes accede a los valores de la variables definidas
    }
    
   }
}

leeObjeto(flight)



     






