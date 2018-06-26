function calcularCirculo(radio){
    let circulo
    circulo = Math.PI*radio*radio
    return circulo
}

function mostrar(circulo){
    let mensaje = 'el resultado es'
    console.log(mensaje, circulo)
}

function main() {//1
    let radio = 3//3
    let circulo = calcularCirculo(radio)//4
    mostrar(circulo)//5
    radio = 7//para cambiar el valor de la variable
    circulo = calcularCirculo(radio)
    mostrar(circulo)
}

main()//2