//funcion que saluda en funcion de tu edad, si eres menor 'hola chaval' si eres mayor de edad hasta 30'hola' si eres mayor de 30 'hola señor'
/* function saludar (edad){ el nombre edad no tiene nada que ver con el de la variable
    return ''
} */
function saludar (edad){
    let aMensaje = [
        'Hola Chaval',
        'Hola colega',
        'Hola señor',
    ]
}

function saludar (edad){
    let mensaje = ''
    if (edad < 18){
        mensaje = 'Hola chaval'
    }else if(edad < 30){
       
    }else if(edad < 70){
        
    }
    
    
    return aMensaje[mensaje]
}

function probar (){
    let edad = 10
    console.log('si tu edad es ${edad}', saludar(edad))
    let edad = 19
    console.log('si tu edad es ${edad}', saludar(edad))
    let edad = 40
    console.log('si tu edad es ${edad}', saludar(edad))

}

probar()




//TDD test development drive (desarrollo guiado por el test)