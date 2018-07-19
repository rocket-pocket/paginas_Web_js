let oPersona = {
    name: 'Pepe',
    edad: 33,
    saludar: function() {
        console.log(`Hola, me llamo ${this.name}`)//Hola, me llamo Pepe
    }
}
// oPersona.name *= 2
oPersona.saludar()

let aDatos = [2,3,4,5]

console.log(typeof JSON.stringify(oPersona));//string
console.log('Tengo un string '+ JSON.stringify(oPersona));//Tengo un string {"name":"Pepe","edad":33}

console.log(typeof JSON.stringify(aDatos));//string
console.log('Tengo un string '+ JSON.stringify(aDatos));//Tengo un string [2,3,4,5]

let datosString = JSON.stringify(oPersona)
let oDatos = JSON.parse(datosString)
console.log(typeof oDatos);//object
console.log(oDatos);//{ name: 'Pepe', edad: 33 }

datosString = '{ "name": "Pepe", "edad": 33 }'
oDatos = JSON.parse(datosString)//{ name: 'Pepe', edad: 33 }
console.log(typeof oDatos);//object
console.log(oDatos);//{ name: 'Pepe', edad: 33 }

