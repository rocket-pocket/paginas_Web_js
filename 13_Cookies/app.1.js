import * as x from './node_modules/js-cookie/src/js.cookie.js'

let numVisitas =  Cookies.get('NumVisitas')
console.log(numVisitas)
if (numVisitas) {
    // Existe la cookie NumVisitas
    numVisitas++
    Cookies.set('NumVisitas', numVisitas, { expires: 7 })
    console.log('Visita número', numVisitas)
} else {
    // No existe la cookie NumVisitas
    Cookies.set('NumVisitas', 1, { expires: 7 })
}

