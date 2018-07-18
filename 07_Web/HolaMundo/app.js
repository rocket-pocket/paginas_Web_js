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
document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */
