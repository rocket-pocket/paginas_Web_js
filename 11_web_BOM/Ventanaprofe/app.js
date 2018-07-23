class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this) )
        this.img = null
        this.prepararImg()
    }

    prepararImg() {
        this.img = new Image()
        this.img.src = './assets/komodo.jpg'
        this.img.addEventListener('load', 
        () => {
            console.log(this.img.width)
            console.log(this.img.height)
        })
       
    }

    abrirVentana() {
        //this.oVentana = window.open()
        // centrada y de 300px

        if (!this.oVentana) {
            this.oVentana = window.open('', '', 
                        `toolbar=yes, 
                        scrollbars=no, 
                        resizable=no, 
                        top=100, 
                        left=100, 
                        width=${this.img.width + 20}, 
                        height=${this.img.height + 20}`)
            this.oVentana.document.write(`<img src=${this.img.src} alt="Dragon de Komodo">`)        
            this.btnAbrir.innerHTML = 'Cerrar Ventana'
        } else {
            this.oVentana.close()
            this.oVentana = null
            //this.btnAbrir.innerHTML = 'Abrir Ventana'
            this.btnAbrir.textContent = 'Abrir Ventana'
        }
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})
