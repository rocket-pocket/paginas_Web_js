function app(){

    let btn = document.querySelector('#btn')
    let demo = onclick ="document.getElementById('#demo').style.color = 'blue'"

    btn.addEventListener('click', saludar)
    /* demo.addEventListener('click', pintar) */

    function saludar(){
        btn.innerHTML= 'HOLA'
    }
    /* function pintar(){
        demo.style.color= 'blue'
    } */
}








document.addEventListener('DOMContentLoaded', app)