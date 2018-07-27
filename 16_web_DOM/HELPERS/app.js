class App{
    constructor(){
        this.parrafoBoton = document.querySelector('#borrador') //this.parrafoBoton -> es un objeto que referencia un nodo
        this.clonBoton = this.parrafoBoton.cloneNode() 
        this.clonBoton.innerHTML = 'ja, ja, JA'
        this.parrafoBorrar = document.querySelector('#siguiente')
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.lista = document.querySelector('.lista')
        console.log(this.parrafoBoton.classList)

        this.btnAbrir.addEventListener('click', () => {
            this.btnAbrir.classList.remove('lista')
        })

        this.parrafoBoton.addEventListener('click', () => {
            if(this.parrafoBoton){  
                this.parrafoBorrar.parentNode.removeChild(this.parrafoBorrar)
                this.parrafoBoton.classList.remove('borrador1')//classList ->  propiedad dinamica para manejar las clases /*clasName es la forma antigua*/
                this.parrafoBorrar = null
            } 

       
            

        })
        
            
    }
}



document.addEventListener('DOMContentLoaded', 
    () => { new App () })