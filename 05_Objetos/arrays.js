let oDatos = {}
// oDatos = new Object()

let aDatos = [1,2]
// aDatos = new Array()

/* console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(typeof aDatos[7])
aDatos[7] = 'Pepe'
aDatos[5] = {} */

console.log(aDatos + [3,4])//1,23,4
console.log(aDatos.concat([3,4]))//[ 1, 2, 3, 4 ]

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
// aNombresOriginal = aNombres
aNombresOriginal = aNombres.join('|').split('|')
aNombres.sort().reverse()
console.log(aNombres)//[ 'Rosa', 'Pepe', 'Maria', 'Luis', 'Arancha' ]
console.log(aNombresOriginal)//[ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria' ]

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
console.log(aNombres.slice(1,4))//[ 'Luis', 'Arancha', 'Rosa' ] ->Hace rebanadas .slice(1,4)-> cogeria el array 1 hasta el 4 sin incluirlo
console.log(aNombres)//[ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria' ]

aClon = aNombres.slice(0, aNombres.length)//CLON es la mejor forma de hacer un clon
aClon.push('Juani')
console.log(aClon)//[ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria' ]

//let aElegidos = aNombres.splice(1,2)
//let aElegidos = aNombres.splice(1,2,'Carlos', 'Juan', 'Antonio')

let aElegidos = aNombres.splice(1, 2, 'juan')

console.log('Elegidos')//Elegidos
console.log(aElegidos)//[ 'Luis', 'Arancha', 'Rosa', 'Maria' ]
console.log('Original:')//Original:
console.log(aNombres)//[ 'Pepe' ]



