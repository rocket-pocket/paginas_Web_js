/* 
*
*@parametro 'dia de la semana'
*@return 'hora de la alarma'  -> 7:00 // 12:00
*
*
*/ 

function despertador(dia){
    let hora = '12:00'
    if (dia == 'L'|| dia == 'M' || dia == 'x' || dia == 'j' || dia == 'V'){
        hora = '7:00'
    }
    return '';
}

function probar(){
    let dia = 'L'
    console.log(`si tu dia es ${dia}`, despertador(dia))
}
despertador()