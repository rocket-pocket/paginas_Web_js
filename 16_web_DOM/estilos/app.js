class App{
    constructor(){
        this.titulo = document.querySelector('#btnAbrir')
        this.parrafoBorrar = document.querySelector('#parrafoBorrar')
        this.titulo.style = 'color: blue'
        this.titulo.style.backgroundColor = 'yellow'
        this.titulo.style.fontSize= '6rem'

        this.titulo.addEventListener('click', () => {
            
                this.parrafoBorrar.parentNode.removeChild(this.parrafoBorrar)
                this.titulo.classList.remove('parrafo')
            
            
        })
        
                
    }
}

//style -> lo que hace es aplicar estilos en línea es mala idea

document.addEventListener('DOMContentLoaded', () => {new App()})

