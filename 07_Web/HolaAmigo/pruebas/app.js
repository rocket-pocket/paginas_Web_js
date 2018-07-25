function app(){

    let btn = document.querySelector('#btn')
    let demo = document.getElementById('#demo')

    btn.addEventListener('click', saludar)
    demo.addEventListener('click', pintar)

    function saludar(){
        btn.innerHTML= 'HOLA'
    }
    function pintar(){
        onclick = "demo.style.color= 'blue'"
    }
}








document.addEventListener('DOMContentLoaded', app)