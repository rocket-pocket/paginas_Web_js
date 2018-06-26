/* VARIABLES GLOBALES */

// var global = 12
// let global = 12
// global = 12

function calcular(pDato) {
    // si se inicializa una variable SIN DECLARAR
    // dentro de una función
    // se crea como variable global
    global = 12
    global = global + pDato
    // global += pDato
    return global;
}

// console.log(calcular(10)) //22
// console.log(global) //22

/* VARIABLES LOCALES */

function aumentar() {
    var local = 2
    let tambienLocal = 3
    const LOCAL = 4

    console.log(local) // 2
    console.log(tambienLocal) // 3
    console.log(LOCAL) // 4
}

// aumentar()
// console.log(local) // undefined
// console.log(tambienLocal) // undefined
// console.log(LOCAL) // undefined

/* VARIABLES LOCALES con AMBITO de BLOQUE */

function disminuir() {
    if (true) {
        var local = 2
        let tambienLocal = 3
        const LOCAL = 4
        tambienLocal += 2
        // LOCAL += 1 // error de asignación
        console.log(local) // 2
        console.log(tambienLocal) // 5
        console.log(LOCAL) // 4
    }

    console.log(local) // 2
    // console.log(tambienLocal)
    // console.log(LOCAL)
}
disminuir()
// console.log(local) // undefined
// console.log(tambienLocal) // undefined
// console.log(LOCAL) // undefined