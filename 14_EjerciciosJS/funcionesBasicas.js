//FUNCIÓN SALUDAR
function saludar(){
    let nombre1 = 'Pepe'
    let nombre2 = 'Juan'
    console.log(`hola mi nombre es ${nombre1} y el nombre de mi amigo es ${nombre2}`)
}
saludar()//hola mi nombre es Pepe y el nombre de mi amigo es Juan


//LOOPING A TRIANGLE
var loop = ["#", "##", "###", "####", "#####", "######", "#######", "########"]

for (let i = 0; i < loop.length; i++) {
    console.log(loop[i])    
}
for (let i = 7; i > 0; i--){
    console.log(loop[i])   
}

//FUNCIONES CON CÁLCULOS
//PURA
function sumar(a,b) {
    let resultado = a+b
    return resultado;
}
//CON EFECTOS
function mostrarSuma(pDato) {
    console.log(`el resultado de la suma es: ${pDato}`)//el resultado de la suma es: 7
                                                       //el resultado de la suma es: 172399
}
//MAIN
function mainSuma() {
    let resultado = sumar(2,5)
    mostrarSuma(resultado)
    mostrarSuma(sumar(45, 172354))
}

mainSuma()


//Dividir
function dividir(a, b){
    let resultado = a / b
    return resultado
}

function mostrarDividir(pDato1){
    console.log(`el resultado de la división es: ${pDato1}`)//el resultado de la división es: 10
                                                            //el resultado de la división es: 33.333333333333336
}

function mainDividir(){
    let resultado = dividir(50, 5)
    mostrarDividir(resultado)
    mostrarDividir(dividir(100, 3))
}

mainDividir()


//Multiplicar
function multiplicar(c ,d) {
    let resultado = c * d 
    return resultado
}

function mostrarMulti(Pdato2){
    let mensaje = 'el resultado de multiplicar es: '
    console.log(mensaje, Pdato2)//el resultado de multiplicar es:  1010
                                //el resultado de multiplicar es:  100
}

function mainMulti(){
    let resultado = multiplicar(10, 101)
    mostrarMulti(resultado)
    mostrarMulti(multiplicar(25, 4))
}

mainMulti()


//Calucular área de un rectángulo
function calcArea(base, altura){
    let resultado = base * altura
    return resultado
}

function mostrarArea(Pdato3) {
    console.log(`El área de el rectángulo es: ${Pdato3}`)//El área de el rectángulo es: 21
}

function mainArea(){
    let resultado = calcArea(7, 3)
    mostrarArea(resultado)
}

mainArea()


//fIZZ BUZZ
function fizz(i){
    let resultado = i
    for (i; i <= 100; i++) {
        if(i % 3 === 0){
            console.log('FIZZ')
        }
        if(i % 5 === 0){
            console.log('BUZZ')
        }
        else{
            console.log(i)
        }    
  }
  return resultado  

}

function mostrarFizz(pDato4){
    console.log(pDato4)
}

function mainFizz(){
    let resultado = fizz(0)
    mostrarFizz(resultado)
    
}

mainFizz()

//fIZZ BUZZ (simplificado)
function fizz(){
    for (let i = 0; i <= 100; i++) {
        if(i % 3 === 0){
            console.log('FIZZ')
        }
        if(i % 5 === 0){
            console.log('BUZZ')
        }
        else{
            console.log(i)
        }    
  } 

}

fizz()

//OBJECTS
function oPersona(){
    let persona = {
        nombre: 'Daniel',
        apellido: 'Verdú',
        edad: 32,
        nacimiento: '10-sept-1985',
        ciudad: 'Madrid',
        hobbies: ['correr', 'nadar', 'programar', 'hacer el pino puente']
    }
    let dato1 = (`Hola, mi nombre es ${persona.nombre} ${persona.apellido}, tengo ${persona.edad} años, `)
    let dato2 =(`nací el ${persona.nacimiento} en la ciudad de ${persona.ciudad}, `)
    let dato3 =(`mis hobbies preferidos son: ${persona.hobbies[0]}, ${persona.hobbies[2]} y ${persona.hobbies[3]}`)

    let resultado = dato1 + dato2 + dato3
    return resultado

}

function mostrarOpersona(pDato5){
    console.log(pDato5)
}

function mainOpersona(){
    let resultado = oPersona()
    mostrarOpersona(resultado)
}

mainOpersona()
