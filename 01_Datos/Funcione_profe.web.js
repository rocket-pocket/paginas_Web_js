/* Dos tipos de funciones
    - Funciones puras, sin "side effects" -> retornan datos
    - Funciones con efectos
    - Funcion Main
*/

function sumar(a,b) {
    let resultado = a+b
    return resultado;
}

function mostrar(pDato) {
    alert(pDato)
}

function main() {
    let resultado = sumar(2,5)
    mostrar(resultado)
    mostrar(sumar(45, 172354))
}

main()
