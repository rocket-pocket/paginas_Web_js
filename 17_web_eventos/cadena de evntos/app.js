function main(){
    document.querySelector('button') //1º de todos, luego hemos añadido los otros ejemplos
    .addEventListener('click', responder, true)//true -> hace que se ejecute el bubbling, si no por defecto está el capturing

    document.querySelector('form')
    .addEventListener('click', responder, true)

    document.querySelector('div')
    .addEventListener('click', responder, true)

    document.querySelector('section')
    .addEventListener('click', responder, true)

    document.querySelector('main')
    .addEventListener('click', responder, true)

    document.querySelector('body')
    .addEventListener('click', responder, true)

    function responder(ev){
        console.dir(ev);
         console.log('Has pulsado en el botón', ev.target.type) 
    }
}

document.addEventListener('DOMContentLoaded', main)