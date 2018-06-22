/* 
Dos tipos de funciones
    -funciones puras, sin "side effects"
    -funciones con efectos
    -funciones main

*/


//ESTO ES UNA FUNCIÓN PURA
function sumar(a,b){
    let resultado = a+b
    return resultado
}

//FUNCION CON EFECTOS
function mostrar(pDato){
    console.log(dato)
    
}
//FUNCIONES MAIN (que no es más que un contenedor)
function main(){
    mostrar(sumar(2,5))
    mostrar(sumar(45, 172354))
    
}
main()
