
function saludar() {
    alert(`hola mundo`)
    
}
function despedir(){
    alert('Adios amigos')
}

function main(){
    document.querySelector('#btn')
    .addEventListener('click', saludar)
    document.querySelector('#btn-adios')
    .addEventListener('click', despedir)

}

/* (function (){
  window.addEventListener('load', main)  
})() */

document.addEventListener('DOMContentLoaded', main) // NORMALMENTE ES ESTE EL QUE SE USA


/* console.dir(document.querySelector('#title')) */ /* document -> objeto| queryselecto -> buscar selector */
   /* document.querySelector('#btn').addEventListener('click', saludar) *//* .addEventListener -> tiene dos prámetros 1ºtipo 2ºla función o la acción */

   /* window.addEventListener('load', function(){
    document.querySelector('#btn')
    .addEventListener('click', saludar)
   }) */ //esto es un manera de hacerlo

  