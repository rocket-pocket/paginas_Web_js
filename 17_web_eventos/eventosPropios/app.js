//dispatchEvents -> nos permite crear nuestros propios eventos

function main (){
    document.querySelector('#btnPulsar')
            .addEventListener('click', pulsar)

            document.querySelector('main')//main escribe 
                    .addEventListener('escribir', escribir)

   function pulsar(oE){
    console.dir(oE.target)
       oE.target.dispatchEvent(
           new Event('escribir', {'bubbles': true,
        }))
   }
   function escribir(oE){
       console.dir(oE)
       document.querySelector('#output').innerHTML="He recibido un evento 'escribir'"   }
}
document.addEventListener('DOMContentLoaded', main)