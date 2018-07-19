function saludar() {
    console.log(`Hola Mundo`)
}

function despedir() {
    console.log(`Adiós Mundo Cruel`)
}

function main() {
    let oBtnSaludar = document.querySelector('#btnSaludar')
    let oBtnDespedir = document.querySelector('#btnDespedir')

    oBtnSaludar.addEventListener('click',saludar)
    oBtnDespedir.addEventListener('click', despedir)
}

// window.addEventListener('load', main)
document.addEventListener('DOMContentLoaded', main)

/* window.addEventListener('load', function () {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}) */
