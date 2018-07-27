class App {
    constructor () {
        this.aBtnMas = document.querySelectorAll('.mas')
        this.aBtnMas.forEach(
            (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
        )
    }

    mostrar(oEvt) {  
        /* console.log(oEvt) */

         let nodoBtn = oE.target
         let nodoTxt = nodoBtn.previousElementSibling
         nodoTxt.classList.toggle('hide')     
       if(nodoTxt.classList.contains('hide')) {
           // boton = Ver mas 
           nodoBtn.textContent = "Ver más"
        } else {
            // boton = Ocultar
            nodoBtn.textContent = "Ver menos"
        }      
     }

}

document.addEventListener('DOMContentLoaded',
    () => { new App()})