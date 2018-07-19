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

aClon = aNombres.slice(0, aNombres.length)//CLON es casi la mejor forma de hacer un clon, la mejor es .map (arraysf.js)
aClon.push('Juani')
console.log(aClon)//[ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria' ]

//let aElegidos = aNombres.splice(1,2)
//let aElegidos = aNombres.splice(1,2,'Carlos', 'Juan', 'Antonio')

let aElegidos = aNombres.splice(1, 2, 'juan')

console.log('Elegidos')//Elegidos
console.log(aElegidos)//[ 'Luis', 'Arancha', 'Rosa', 'Maria' ]
console.log('Original:')//Original:
console.log(aNombres)//[ 'Pepe' ]

let aNotas = [[10,7,8],[5,4,7],[6,3,2]]
console.log(aNotas[1][1])// []-> la posicion del array [] -> la posición del dato a usar. queremos sacar el :4

aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aNombres.push(['Roberto', 'Herminia'])
/* aNombres.push(...['Roberto', 'Herminia']) *///[ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Roberto', 'Herminia' ]
console.log(aNombres)/**
[ 'Pepe',
  'Luis',
  'Arancha',
  'Rosa',
  'Maria',
  [ 'Roberto', 'Herminia' ] ]  */

/** - push -> añade un elemnto al final de array
 *  - pop -> elimina el último elemento del array
 *  - shift -> elimina el primer elemento 
 *  - unshift -> añade un elemento al principio del array
 */


