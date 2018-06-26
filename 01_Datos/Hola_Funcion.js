/* 
    JavaScript marcaRegistrada de Oracle -> ECMAscript = JavaScript(la version opensource) -> ES6 / ES2015
    const= datos que no pueden variar una vez que se definen
    const SALUDO = 'HolaCaracola'
    */

//funcion: agrupar un bloque de código y luego invocarlo

function hello(pUser) {
  const SALUDO = 'HolaCaracola'
  console.log(SALUDO, pUser)  
}
hello('juan')
hello('maría')

function saludar(user){ //crear funciónfunction name(params) 
    var saludo = 'Hola'
    console.log(saludo, user)
}

saludar('Pepe') //invocar función
saludar('Helena')

//function Sumar
function sumar(a,b){
    //VARIABLE LOCAL
    let resultado = a + b
    console.log(resultado)
}
saludar('pepe')
saludar('Helena')
sumar(2,4)

// buenas prácticas

/*  
    ----> siempre declaro las variables

    ----> las var globales son caca
 */


//diferncia entre let y var
 function dividir (a,b){
     let resultado = 0
     if (b != 0){
/*let*/ resultado = a / b
     }     
     console.log(resultado)
 }
 dividir(4,2)

