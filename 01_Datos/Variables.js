/* VARIABLES GLOBALES */


//var global = 12 esto es una variable global

function calcular(pDato) {
    global = 12//variable sin declarar se crea como variable global
    global = global + pDato;
   //global += pDato
    return global;
}
console.log(global)
console.log(calcular(10))

/* VARIABLES LOCALES */

/* function aumentar(){
    var local = 2
    let tambienLocal = 3
    const LOCAL = 4

    console.log(local)//2
    console.log(tambienLocal)//3
    console.log(LOCAL)//4
}

console.log(local)//Undefined */

/* VARIABLES LOCALES CON AMBITO DE BLOQUE */

function disminuir(){
    if (true){
        var local = 2
        let tambienLocal = 3
        const LOCAL = 4

        local += 2
    }
    console.log(local)//2
    //console.log(tambienLocal)
    //console.log(LOCAL)
}
disminuir()
/* console.log(local)
console.log(tambienLocal)
console.log(LOCAL) */