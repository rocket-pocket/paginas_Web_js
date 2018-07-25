class Apps{//2º
    constructor(){//3º
        this.clave = document.querySelector('#clave')//4º
        this.btnBuscar = document.querySelector('#buscar')//5º

        this.btnBuscar.addEventListener('click', () => {//6º  las arrow function 
                                                        //siempre utilizan el this en el monento en 
                                                        //que se definen no en el momento en el que se ejecuta
            console.log(this)
            let clave = this.clave.value//7º
            let url = 'https://www.google.es/search?q='//9º
            if (clave){//8º
                window.location.href = url + clave
                //
            }
        })
    }
}




document.addEventListener('DOMContentLoaded', () => {new Apps})//1º