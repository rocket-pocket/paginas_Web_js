/**
 * Función saludar
 * 
 * Hola chaval -> <18
 * Hola colega -> <30
 * Buenos dias -> <70
 * Saludos, maestro
 * 
 */

function saludar (edad) {
    let aMensajes = [
        'Hola chaval', 
        'Hola colega', 
        'Buenos dias', 
        'Saludos, maestro'
    ]
    let mensaje = 3
    if (edad < 18) {
        mensaje = 0
    } else if (edad < 30) {
        mensaje = 1
    } else if (edad < 70) {
        mensaje = 2
    }
    return aMensajes[mensaje];
}

function probar () {
    let edad = 10
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Hola chaval
    edad = 19
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Hola colega
    edad = 40
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Buenos dias
    edad = 80
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Saludos, maestro
}

probar()