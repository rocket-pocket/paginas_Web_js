function calcularCirculo(radio) {
    return (Math.PI*radio*radio).toFixed(2)
}

function calcularCircunf(radio) {
    return (Math.PI*radio*2).toFixed(2)
}

function mostrarCirculo(radio, circulo) {
   /*  let mensaje = 'El area del circulo de radio '
    mensaje += radio
    mensaje += ' es '
    mensaje += circulo */
    let mensaje = `
    Resultado: 
    El area del circulo de radio ${radio} es ${circulo}`
    console.log(mensaje)
}
function mostrarCircunf(radio, circunf) {
     let mensaje = 
     `    La longitud de la circuferencia de radio ${radio} es ${circunf}`
     console.log(mensaje)
 }

function main() {
    let radio = 3
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))
    radio = 7
    mostrarCirculo(radio, calcularCirculo(radio))
    mostrarCircunf(radio, calcularCircunf(radio))      
}

main()
