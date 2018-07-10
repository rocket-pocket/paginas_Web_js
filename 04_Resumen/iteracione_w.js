//Iteraciones (repetir, iterar)
//for
//while
//do


function iterar(){
    
    for (let i = 0; i < 3; i++) { //Aquí el i++ solo puede ir aquí
        console.log(`soy la vuelta ${i+1}`)// Sería igual a decir -> ${i+1}console.log(`se sumar: 2+ 2 = ${2+2} `)
        
    }

}
iterar()

//While
function iterarWhile() {
    let i = 0
    while(i < 3){
        i++// si cambiasemos i++ abajo de console.log comenzaería desde 0
        console.log(`soy la vuelta ${i}`)
    }
}

iterarWhile()

//DO

//While
function iterarDo() {
    let i = 0
    do{
        i++
        console.log(`soy la vuelta ${i}`)
    }while (i < 0)
}

iterarDo()
