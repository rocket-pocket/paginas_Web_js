class Apps{
    constructor(){
       this.oVentana = null
       this.btnAbrir = document.querySelector('#btnAbrir')//acceder al boton desde js -> 1º
       this.btnCerrar = document.querySelector('#btnCerrar')
       this.asignarHandlers()  
       console.dir(this.btnAbrir)    
       
    }
    asignarHandlers(){
        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this))
        this.btnCerrar.addEventListener('click', this.cerrarVentana.bind(this))
    }
    abrirVentana(){
        if(!this.oVentana){ // !this.oVentana -> si no tengo ventana te dejo crearla 
            this.oVentana = window.open('','',//abre una ventana emergente
            `top= 400,
            left=400,
            width=300,
            height=300`)
            this.oVentana.document.write('<h1>Hola esta es una nueva ventana</h1>')//escribe en la página
            this.btnAbrir.disabled = true
            this.btnCerrar.disabled = false

        }
        /* this.oVentana = window.open('https://github.com/rocket-pocket/paginas_Web_js') *///abre un aventana en un enlace absoluto
        /* this.oVentana = window.open('./ventana.html') */ //abre ventana  a un enlace relativo       
        
    }
    
    cerrarVentana(){
        this.oVentana.close()
        this.oVentana = null //lo dejamos como estaba inicialmente para poder abrir de nuevo
        this.btnAbrir.disabled = false
        this.btnCerrar.disabled = true 
    }
}

document.addEventListener('DOMContentLoaded', () => {new Apps})//() => {} -> funcion manejadora de eventos,
//es tan corta que no le ponemos nombre , lo que hará será instanciar u objet que es el que se ocupará de todo el trabajo, lo hacemos para tener encapsulado todo el contenido