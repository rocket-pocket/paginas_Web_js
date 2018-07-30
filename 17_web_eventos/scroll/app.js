class App {

    constructor () {
        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        this.header = document.querySelector('header')
        this.parrafoHeader = document.querySelector('header p')
        this.bajoHeader = document.querySelector('#bajo-header')

        document.addEventListener('scroll', 
            this.scollDetect.bind(this) )
        this.btnTop.addEventListener('click', 
            this.subir.bind(this))
    }   
    
    scollDetect (oE) {
        if (oE.target.scrollingElement.scrollTop > 20) {
            // sticky header 
            this.header.classList.add('sticky-header')
            this.header.classList.remove('normal-header')
            this.parrafoHeader.classList.add('hide')
            this.bajoHeader.classList.add('bajo-header')
            this.bajoHeader.classList.remove('hide')
        } else {
            // normal header
            this.header.classList.remove('sticky-header')
            this.header.classList.add('normal-header')
            this.parrafoHeader.classList.remove('hide')
            this.bajoHeader.classList.remove('bajo-header')
            this.bajoHeader.classList.add('hide')
        }
        
        if (oE.target.scrollingElement.scrollTop > 100) {
            this.divTop.classList.remove('hide')
        } else {
            this.divTop.classList.add('hide')
        }
    }

    subir(oE) {
        document.scrollingElement.scrollTop = 0
    }
}

document.addEventListener('DOMContentLoaded', ()=> {new  App()})