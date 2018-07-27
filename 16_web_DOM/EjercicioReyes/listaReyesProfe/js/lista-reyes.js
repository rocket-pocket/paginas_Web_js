const REYES = new Array('Fernando', 'Isabel', 'Juana', 'Carlos', 'Felipe',
        'Luis', 'Jose', "Amadeo", 'Alfonso', 'Juan Carlos');

export class ListaReyes {
    constructor () {
        this.aAcertados = []
        this.listaReyes = REYES
        this.listaReyesMay = 
            this.listaReyes.map(item => item.toUpperCase())

        this.domBoton = document.querySelector("#btnAdd")
        this.domMensaje = document.querySelector("#respuesta");
        this.domLista = document.querySelector("#lista");
        this.domInput = document.querySelector('#inpRey')

        this.domBoton.addEventListener('click', this.nuevoName.bind(this))
    }

    nuevoName() {
        this.domMensaje.innerHTML = " ";
        // recogemos el valor escrito por el usuario
        let cad = this.domInput.value
        if (!cad) {
            return false
        }
        
        // posición del valor en el array
        // o -1 si no está
        let pos = this.listaReyesMay.indexOf(cad.toUpperCase())
        if (pos >= 0) {
            // comprobamos si el nombre de rey 
            // ya esta en la lista
            if (this.aAcertados.indexOf(pos) < 0) {
                this.pintaItem(pos)
                this.aAcertados.push(pos)
            }
        } else {
            this.domMensaje.innerHTML = 
            `${cad} no es el nombre de un rey / reina de España.`
        }
    }

    pintaItem(numItem) {
        /* var elemento = document.createElement("li");
        var texto = document.createTextNode(this.listaReyes[numItem]);
        elemento.appendChild(texto);
        var lista = document.getElementById("lista");
        lista.appendChild(elemento); */
        this.domLista.innerHTML += 
            `<li>${this.listaReyes[numItem]}</li>`
        
    }
}