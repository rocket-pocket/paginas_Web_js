function calcularCirculo(radio) {
    let circulo
    circulo = Math.PI*radio*radio
    return circulo
}

function mostrar(circulo) {
    let mensaje = 'El resultado es'
    console.log(mensaje, circulo)
}

function main() {
    let radio = 3
    let circulo = calcularCirculo(radio)
    mostrar(circulo)
    radio = 7
    circulo = calcularCirculo(radio)
    mostrar(circulo)      
}

main()