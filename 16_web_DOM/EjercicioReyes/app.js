class App{
    constructor(){
        this.listaReyes = ['Federico', 'Juan', 'Pedro', 'Santiago', 'Ramón']
        this.respuesta = document.querySelector('#respuesta')
        this.btnComprobar = document.querySelector('#comprobar')
        this.correcto = document.querySelector('#pBueno')
        this.erroneo = document.querySelector('#pMalo')

        this.btnComprobar.addEventListener('click', this.mostrar.bind(this))
        
    }
    mostrar(){
        
        if(this.listaReyes == [0] || [1] || [2] || [3] || [4]){
            this.correcto.innerHTML= 'Buen trabajo' 
        }else{
            this.erroneo.innerHTML= 'Respuesta erronea'
        }
    }
    
   
}

 document.addEventListener('DOMContentLoaded', () => {new App}) 