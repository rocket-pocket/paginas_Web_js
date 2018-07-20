function saludar() {
    console.log(`Hola Mundo`)
}

function despedir() {
    console.log(`Adiós Mundo Cruel`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)

    document.querySelector('#btnDespedir')
    .addEventListener('click', despedir)
}

// window.addEventListener('load', main)
document.addEventListener('DOMContentLoaded', main)/// 1-- PRIMERA LÍNEA DE TODO DOCUMENTO JS -> Esperate a  que el html carge

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */
