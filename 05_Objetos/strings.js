let cadena = 'Pepe'
let frase = 'Un anillo para todos'
console.log(cadena.length)
console.log(cadena.concat(' Peréz'));
console.log(cadena + ' Peréz');

/* aCadena = cadena.split('')
console.log(aCadena)
aFrase = frase.split(' ')
console.log(aFrase);
console.log(aFrase.join('')) */

console.log(frase.split(' ').join('').toUpperCase());
console.log('Peréz'.toLowerCase());


console.log('ciudades'.slice(2,5));
console.log('ciudades'.substr(2,3));




function capitalizar(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabra.split('')
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('')
        aTexto[i] = palabra
    }
    let stringCap = aTexto.join(' ')
    return stringCap
}


function capitalizar2(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let aLetras = aTexto[i].split('')
        aLetras[0] = aLetras[0].toUpperCase()
        aTexto[i] = aLetras.join('')
    }
    return aTexto.join(' ')
}

console.log(capitalizar('Un anillo para todos'));

console.log(String.fromCharCode(13465))