function calcularCirculo(radio){
    return Math.PI*radio*radio
}
function calcularCircunf(radio){
    return Math.PI*radio*2
}

/* function mostrar(circulo){
    let mensaje = 'el resultado es'
    console.log(mensaje, circulo)
} */
function mostrarCirculo(radio, circulo){
    /* let mensaje = 'el área de un circulo de radio'
    mensaje = mensaje + radio
    mensaje = mensaje + 'es'
    mensaje = mensaje + circulo */
    /* "hola" + "pepe" */ //NO ES UNA SUMA ES UNA CONCATENACIÓN
    let mensaje = 
    `el área de un circulo de radio ${radio} es ${circulo}`
    console.log(mensaje)
}
function mostrarCircunf(radio, circunf) {
    let mensaje = `la longitud de la circunferencia del circulo ${radio} es ${circunf}`
    console.log(mensaje)
}

function main() {
    let radio = 3
    mostrarCirculo(radio, calcularCirculo(radio))//5
    mostrarCircunf(radio, calcularCircunf(radio))
    radio = 7

    
    mostrarCirculo(radio, calcularCirculo(circulo))
    
}

main()//2