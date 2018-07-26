class App {
    constructor() {
        this.count = 0;
        this.aLinks = document.querySelectorAll('.social')
        this.items = this.aLinks.length

        // asocio a todos los nodos el mismo manejador
        this.aLinks.forEach( (node) => {
            node.addEventListener('click', this.cambiaLista.bind(this))
        });
    }

    cambiaLista(ev) {
        let nodeItem = ev.target
        // Si el item ya esta cambiado, no hago nada
        if (nodeItem.textContent.indexOf('Ops') >= 0) {
            return
        }
        // Cambio el item clickeado
        nodeItem.textContent = "Ops, no tengo " + nodeItem.textContent;
        this.count++;
        // Si ya han cambiado todos los items ...
        if (this.count === this.items) {
            nodeItem.parentNode.parentNode.outerHTML = 
                    `<div>
                        <p>Lo siento, parece que estoy ilocalizable</p>
                    </div>`;
        }
    }
}


document.addEventListener("DOMContentLoaded",() => {new App()})