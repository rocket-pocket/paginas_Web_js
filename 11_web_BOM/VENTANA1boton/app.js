class Apps{
    constructor(){
       this.oVentana = null 
       this.btnAbrir = document.querySelector('#btnAbrir')//acceder al boton desde js -> 1º
       this.img=  null
       this.prepararImg()//jugar con imágenes
       
       this.asignarHandlers()  
       console.dir(this.btnAbrir)    
       
    }
    asignarHandlers(){
        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this))
    }
    prepararImg(){
        this.img = new Image()
        this.img.src = './assets/american gods.jpg'
        this.img.addEventListener('load', () =>{
            console.log(this.img.width)
            console.log(this.img.height)
        })
        
    }
    abrirVentana(){
        let x = this.img.width
        if(!this.oVentana){ // !this.oVentana -> si no tengo ventana te dejo crearla 
            this.oVentana = window.open('','',//abre una ventana emergente
            `toolbar=no,
            scrollbars= no,
            resizable= no,
            top= 100,
            left=100,
            width=${this.img.width + 20},
            height=${this.img.height + 20}`)
            /* this.oVentana.document.write('<h1>Hola esta es una nueva ventana</h1>') *///escribe en la página document write reescribe todo lo anterior -> no se se suele utilizar
            this.oVentana.document.write(`<img src=${this.img.src} alt="Dragon de Komodo">`)    
            this.btnAbrir.innerHTML= 'cerrar ventana'

        }else{
            this.oVentana.close()
            this.oVentana = null //lo dejamos como estaba inicialmente para poder abrir de nuevo
            this.btnAbrir.innerHTML = 'abrir ventana'
        }
        /* this.oVentana = window.open('https://github.com/rocket-pocket/paginas_Web_js') *///abre un aventana en un enlace absoluto
        /* this.oVentana = window.open('./ventana.html') */ //abre ventana  a un enlace relativo       
        
    }
    
}

document.addEventListener('DOMContentLoaded', () => {new Apps})//() => {} -> funcion manejadora de eventos,
//es tan corta que no le ponemos nombre , lo que hará será instanciar u objet que es el que se ocupará de todo el trabajo, lo hacemos para tener encapsulado todo el contenido