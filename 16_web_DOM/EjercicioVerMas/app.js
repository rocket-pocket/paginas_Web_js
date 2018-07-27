//ejemplo 1 (facilito) -> se va a abrir el primer parrafo,
//hemos añadido dos párrafos más para poder hacer el ejemplo que vien después

 class App {    
    constructor () {
        
        this.btnMas = document.querySelector('.mas')
        this.textoMas = document.querySelector('.hide')
        
        //este ejemplo esta hecho con funcion con nombre
        this.btnMas.addEventListener('click', this.mostrar.bind(this))
    }
    mostrar(){  

        //se puede hacer el if de esta otra manera, con contains -> 
         /*     if(this.textoMas.classList.contains('hide')) {
            this.textoMas.classList.remove('hide')
        } else {
            this.textoMas.classList.add('hide')
        }   */      
        //this.textoMas.classList.toggle('hide')

        //this.textoMas.classList.toggle('hide')
         this.textoMas.classList.toggle('hide')

         //mostrar mensaje en el boton -> 
         if(this.textoMas.classList.contains('hide')) {
             boton = 'ver más'
           this.btnMas.textContent = 'ver más'
        } else {
            //boton ocultar
            this.btnMas.textContent = 'ver menos'
        }        
    
        

    }
}

document.addEventListener('DOMContentLoaded', () => { new App()}) 




