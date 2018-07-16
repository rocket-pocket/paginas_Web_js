function app(){

    //
    domNombre = document.querySelector("#nombre")
    domBtnSaludar = document.querySelector("#btnSaludar")
    domBtnBorrar = document.querySelector("#btnBorrar")
    domNombre.addEventListener('input', leerDatos)
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)

    //domNombre.value = 'Pepe'

    function leerDatos(){
        console.log(domNombre.value)
    }

    function saludar(){
        console.log('hola Mundo')
    }
    function borrar(){
        console.log('Aun no se borrar')
    }
}
document.addEventListener('DOMContentLoaded', app)