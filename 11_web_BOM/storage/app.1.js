if (localStorage.numVisitas) {
    // Existe numVisitas en localStorage
    localStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    localStorage.numVisitas = 1
} 
console.log('Visita número', localStorage.numVisitas)

//geolocation solo tiene tres funciones

/* let x = */ navigator.geolocation.getCurrentPosition((data) => {console.log(data)},
                                                      (error) => {console.log(error)}   
)
//console.log(x) -> esto saldría mal por un problema de asincronía

/* navigator.geolocation.getCurrentPosition((data) => {
    console.log(data)
})
  */

  //call back -> es una funcion que le pasamos a otra funcion para que la ejecute ella más adelante


  //document.addEventListener('DOMContentLoaded')
