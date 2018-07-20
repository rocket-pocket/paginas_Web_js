class Apps{
    constructor() {
        this.amigo = 'Pepe'
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnDespedir') 
        this.asignarHandlers()
    }
//cuando tengo un manejador de eventos this hace referencia al elemento que dispara el evento
    asignarHandlers() {
        console.log(this)
        this.oBtnSaludar.addEventListener('click', this.saludar.bind(this))//bind me permite decirle quien  quiero que sea this en todo  momento
        this.oBtnDespedir.addEventListener('click', this.despedir.bind(this)) 
    }

    //regla siempre que defino un manejador de eventos con this por delante le pongo un bind this por detrás

    saludar(oE) {
        console.log(oE.target) //simpre recibe un pararametro  objeto de tipo event y dentro de ese objeto esta el target (en de definitiva así volvemos a acceder al boton)
        console.log(this)
        console.log(`Hola ${this.amigo}`)
    }
  
    despedir() {
        console.log(`Adios ${this.amigo}`)
    }
}


document.addEventListener('DOMContentLoaded', 
        () => new Apps())

// Seria lo mismo que 
// document.addEventListener('DOMContentLoaded', 
//        function () {new Apps()})


// Seia lo mismo que 
//function main() {
//    new Apps()
//}
// document.addEventListener('DOMContentLoaded', main)
