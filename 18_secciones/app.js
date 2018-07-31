
class App{
    constructor(){
        //array de nodos de tipo -> a
        this.aNodosMenu = document.querySelectorAll('nav a') //estamos seleccionadno los elementos del menu
        this.aNodosSection = document.querySelectorAll('section')//seleccionamos los sections, si quisiesemos ser más especificos main>section
        //console.log(this.aNodosMenu)
        //console.log(this.aNodosSection)

        //para saber las posiciones de cada section necesitamos un array
        this.aOffset = []
        this.calcularOffsets()
        this.seccionActiva = 0

        /* 2º */
        document.addEventListener('scroll', this.scrollDetect.bind(this)) //detecta el scroll


        this.aNodosMenu.forEach(
            (nodosMenu) => {nodosMenu.addEventListener('click',
        this.navegar.bind(this))}
        )      

        
    }
    //3º 
    scrollDetect(oE){
        let position = oE.target.scrollingElement.scrollTop
        let index
        this.aOffset.every(
            (offset, i) => { 
                if( position >= offset) {
                    index = i
                    return true}
                else { return false}
            })
        console.log(index)
        if(this.seccionActiva != index){
            this.aNodosMenu.forEach(
                (nodoMenu) => {nodoMenu.classList.remove('active')}
            )
            this.aNodosMenu[index].classList.add('active')
            this.seccionActiva = index

        }
    }
        /* this.aOffsets.forEach (    //recorrer el cunjunto de los rangos
            (offset, i) => {
                if(position >= offset) {}
                else {return i}
            })
            return i */
    //[0, 731, 1382, 2032, 2683]//nuestros offSets
    //supiongamos que position vale 100 que queremos que devuelva? -> 1

    //4º
    navegar(oE){
        let i = oE.target.dataset.index;
        oE.preventDefault()
        /* console.log(x) */
        window.scroll({
            top: this.aOffset[i],
            left: 0,
            behavior: 'smooth',
        })
    }
    //hacer un foreach de cada section y coger el valor
    calcularOffsets(){
        this.aNodosSection.forEach(
            (section) => {
                //console.log(section.offsetTop) //con offsetTop sabemos la posición de cada section
                this.aOffset.push(section.offsetTop-100)//para sacarlos por el array
            }
        )
        this.aOffset[0] = 0 //para dejar el primer valor a cero
        //console.log(this.aOffset)//[0, 731, 1382, 2032, 2683]
    }
}

document.addEventListener('DOMContentLoaded', () => {new App()})
