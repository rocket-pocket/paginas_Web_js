


function calcular(total, pIncremento) {
    total = total + pIncremento;
   //total += pIncremento
    return total;
}
function main1(){
    let total = 12
    let incremento = 10
    console.log(calcular(total, incremento))//22
}
main1()    



/* VARIABLES LOCALES CON AMBITO DE BLOQUE */

/*  function disminuir2() {
     let local = 2
     const LOCAL = 4
        if true {
         local += LOCAL
        }
     console.log(local)
     console.log(LOCAL)    
 }
 disminuir() */