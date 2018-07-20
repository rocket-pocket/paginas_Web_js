function main() {
    let oBtnSaludar = document.querySelector('#btnSaludar')
    let oBtnDespedir = document.querySelector('#btnDespedir')

    asignarHandlers()

    function asignarHandlers(){
        oBtnSaludar.addEventListener('click',saludar)
        oBtnDespedir.addEventListener('click', despedir)
    }

    function saludar() {
        console.log(`Hola ${amigo}`)
    }
  
    function despedir() {
        console.log(`Adios ${amigo}`)
    }
}

document.addEventListener('DOMContentLoaded', main)


