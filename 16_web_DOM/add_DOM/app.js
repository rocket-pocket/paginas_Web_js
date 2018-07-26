class App{
    constructor(){
            this.btnAceptar=''
            //setTimeout(this.addInfo, 2000 )
            setTimeout(this.addInfoModerno.bind(this), 2000 )
            setTimeout(this.addInfoEnmedio, 2000 )
    }
    //estilo antiguo = caca
    addInfo(){
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza Cookies')
        //ahora tengo que juntarlos
        nodoElement.appendChild(nodoTexto) //-> añade un hijo
        document.body.appendChild(nodoElement) //añadimos el texto al body
        
        
    }

    //hacerlo en una sola línea y mucho más fácil
    addInfoModerno(){
        document.body.innerHTML += `<div class="aviso"><p>Este sitio utiliza Cookies Moderno</p> 
        <button type="button" id="btn">Aquí</button></div>`
        document.body.innerHTML += `<div class="imagen"><img src="./assets/Responsive_Web_Design_Demo_Template.svg" alt=""></div>`

        this.addBoton()
        
    }
   /*  addInfoEnmedio(){
        document.querySelector('#desaparece').outerHTML = `<div class="aviso1"><p>Este sitio utiliza Cookies Moderno</p> 
        <button type="button" id="btn">Aquí</button></div>`
        this.addBoton()
    } */


    //darle funcionalidad al boton
    addBoton() {
        let btnAceptar = document.querySelector('#btn')
        btnAceptar.addEventListener('click', () => {
            btnAceptar.disabled = true
            setTimeout( () =>{
               let nodo = document.querySelector('.aviso')//quitar el aviso 
                nodo.parentNode.removeChild(nodo) 
            }, 2000)
        })
    }
    
}




document.addEventListener('DOMContentLoaded', () => {new App()})

/**
 * class App {
    constructor () {
        setTimeout(this.addInfoEnMedio.bind(this),2000)
    }

    addInfo () {
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        nodoElement.appendChild(nodoTexto)

        document.body.appendChild(nodoElement)
    }

    addInfoModerno() {
        document.body.innerHTML += `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`

        this.addBoton()
    }

    addInfoEnMedio() {
        document.querySelector('#desaparecere').innerHTML = `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`

        this.addBoton()
    }

    addBoton() {
        let btnAceptar = document.querySelector('#btnAceptar')
        btnAceptar.addEventListener('click', () => {
            btnAceptar.disabled = true
            setTimeout( () =>{
               let nodo = document.querySelector('.aviso')
                nodo.parentNode.removeChild(nodo) 
            }, 2000)
        })
    }
}


document.addEventListener('DOMContentLoaded', 
    () => { new App () })
  */