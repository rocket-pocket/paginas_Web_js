class App{
    constructor(){
        this.count = 0
        this.aLinks = document.querySelectorAll('.social')
        this.items = this.aLinks.length

        this.aLinks.forEach((node) => {
            node.addEventListener('click', this.cambiaLista.bind(this))
        } );

    }
    cambiaLista(ev){
        let nodeItem = ev.target
        // Si el item ya esta cambiado, no hago nada
        if(nodeItem.textContent.indexOf('Ops') >=0){
            return
        }
    }
}




document.addEventListener('DOMContentLoaded', () => {new App})