function app () {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    domBtnSaludar.addEventListener('dblclick', saludar)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', saludar)
    
    function saludar(ev) {

        if (ev.type === 'dblclick') {
            domOutput.innerHTML = "DBLCLICK no se debe usar"
            return
        }
        if (ev.target.id === 'btnBorrar') {
            domNombre.value = '' 
        }
        domOutput.innerHTML = ''
        if (!!domNombre.value) {
            domOutput.innerHTML = `Hola, <strong>${domNombre.value}</strong>`
        } 
    }
}
document.addEventListener('DOMContentLoaded', app)

