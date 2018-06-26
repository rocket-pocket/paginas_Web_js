/* VARIABLES GLOBALES */

// No se usan

/* VARIABLES LOCALES */

function calcular(pTotal, pIncremento) {
    pTotal = pTotal + pIncremento
    // pTotal += pIncremento
    return pTotal;
}
function main1() {
    let total = 12
    let incremento = 10
    console.log(calcular(total, incremento )) //22
    console.log(total) //12
}
main1()

/* VARIABLES LOCALES con AMBITO de BLOQUE */

function disminuir1() {
    if (true) {
        let local = 2
        const LOCAL = 4
        local += 2
        console.log(local) // 4
        console.log(LOCAL) // 4
    }
}

function disminuir2() {
    let local = 2
    const LOCAL = 4
    if (true) {
        local += LOCAL
    }
    console.log(local) // 6
    console.log(LOCAL) // 4
}

function disminuir3() {
    // let local = 2
    let local 
    local = 2
    const LOCAL = 4
    local -= LOCAL
    console.log(local) // -2
    console.log(LOCAL) // 4
}

disminuir1()
disminuir2()
disminuir3()