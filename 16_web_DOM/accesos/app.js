class App{
    constructor(){
        //queryselector -> para llegar a cualquier nodo del DOM
        let nodo3 = document.querySelector('div p')
        console.dir(nodo3)

        let nodo1 = document.querySelector('#p1')//es el que más utilizamos
        console.dir(nodo1)

        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)


        //queryselectorAll -> lo convierte en un array
        let nodos = document.querySelectorAll('p') 
        console.dir(nodos)
        //nodos.forEach(
           // (item, i, lista) => {} //-> () => {} callback  ------- (item, i, lista ) son los parámetros del forEach
                                                                    // (valor, index, nombre)
            /* (nodos) => {nodos.innerHTML= 'JA, JA'} */
       //)

        //Antes se usaban estos selectores
        console.info('getElement...')
        
        
        console.dir(document.getElementById('p1') )//en estos  casos no hay que poner la #
        
        console.dir(document.getElementsByClassName('importante'))//selecciona por clases
        
        console.dir(document.getElementsByTagName('p'))//selecciona por el nombre de la etiqueta
       
        console.dir( document.getElementsByName('nombre'))//para formularios, ya que coge los nombres

        //MENU
        let nodoMenu = document.querySelector('#main-menu')
        console.dir(nodoMenu)
        
        //devuelve una lista de nodos de 10 elementos
        console.dir(document.querySelectorAll('li'))
        
        //devuleve una lista de nodos de 5 elementos -> solo los que pertenecen a nodoMenu
        console.dir(nodoMenu.querySelectorAll('li'))

        console.dir(nodoMenu.childNodes)//NodeList
        console.dir(nodoMenu.children)//HTMLColledction
        document.querySelector('#segundo').style.color='brown'
        console.dir(nodoMenu.children[0].children[2])
        nodoMenu.children[0].children[2].style.color='green'
        document.querySelector('h1').style.color= 'red'
        console.dir(nodoMenu.parentElement)
        console.dir(nodoMenu.nextElementSibling)
        console.dir(nodoMenu.previousElementSibling)
    }
}



document.addEventListener('DOMContentLoaded', () => {new App}) //-> () => {} función manejadora de eventos
                                                            //new App -> instancia un objeto