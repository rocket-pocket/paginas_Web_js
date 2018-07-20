function app() {
    let amigo = "Pepe"
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)
    document.querySelector('#btnDespedir').addEventListener('click', despedir)
                                                            //('click', despedir()) -> esta funcion se ejecutaria automaticamente

    function saludar() {
        console.log(`Hola ${amigo}`)
    }
    function despedir(){
        alert('Hasta luego Lucas')
    }
}

(function () {
    //window.addEventListener('load', app) 
    document.addEventListener('DOMContentLoaded', app)
    console.log('Ejectutada la sentencia de esperar al DOM')
})()


//Forma más organizada para 


