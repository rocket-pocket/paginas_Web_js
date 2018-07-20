
//constructor
class Apps{
    constructor() {
        this.amigo = 'Pepe'
        this.isSaludar = true
        this.oBtn = document.querySelector('#btnDual')
        this.oOutput = document.querySelector('#saludo')
        this.asignarHandlers()
    }
//asignador de manejadores
    asignarHandlers() {
        console.log(this)
        //this.oBtn.addEventListener('click', this.dualOld.bind(this))
        this.oBtn.addEventListener('click', this.dualNew.bind(this))
    }

    

/*     dualOld(oE) {
        console.log(oE.target) 
        console.log(this)
        if (this.isSaludar) {
            console.log(`Hola ${this.amigo}`)
            //this.isSaludar = false
            //oE.target.innerHTML= 'Adios'
        }else{
           console.log(`Adios ${this.amigo}`)
           //this.isSaludar = true 
           //oE.target.innerHTML= 'Hola'
           
        }
        this.isSaludar = !this.isSaludar
        oE.target.innerHTML= this.isSaludar ? 'Hola' : 'Adios'
        
        
    }
} */

dualNew(oE) {
    //console.log(oE.target) 
    //console.log(this)
    let mensaje = `Adios ${this.amigo} `
    if (this.isSaludar) {
        mensaje = `Hola ${this.amigo}`
        //this.isSaludar = false
        //oE.target.innerHTML= 'Adios'
    }
       
    
    this.isSaludar = !this.isSaludar
    oE.target.innerHTML= this.isSaludar ? 'Hola' : 'Adios'
    this.oOutput.innerHTML = mensaje
    
    
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
