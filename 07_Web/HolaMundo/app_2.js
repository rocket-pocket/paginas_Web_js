function saludar() {
    console.log(`Hola Mundo`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
}

(function () {
    window.addEventListener('load', main)
})()


