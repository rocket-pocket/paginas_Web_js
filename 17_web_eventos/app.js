
function main1(){
    //document.body.addEventListener('mousemove', (ev) => {//se invoca así no hace falta hacer un document.queryselector('body')
            //console.log('ohhhh')//se le añade el ev evento objeto
            //console.log(ev.clientx, ev.clientY) son las coordenadas se usa mucho e canvas
    //})

    let aDivs = document.querySelectorAll('section div')
    // aDivs.addEventListener()
    aDivs.forEach((div) => {
        div.addEventListener('mouseover',
            () => {div.style.backgroundColor = "pink"})
        div.addEventListener('mouseout',
            () => {div.style.backgroundColor= "brown"})  
                
    })

}
 function main(){
   let aDivs =  document.querySelectorAll('section div')
   aDivs.forEach((div) => {
                div.addEventListener('mouseover', hover)             
                div.addEventListener('mouseout', hover)           
       

    } )

    function hover(oE){

        //en este caso al no ser un metodo
        //this === oE.target
        console.dir(oE)
        if(oE.type == 'mouseover'){
            this.style.backgroundColor = 'pink'
        }else{
            this.target.style.backgroundColor = 'brown'
        }
    }
   

} 

document.addEventListener('DOMContentLoaded', main1)


