if (localStorage.numVisitas) {
    // Existe numVisitas en localStorage
    localStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    localStorage.numVisitas = 1
} 
console.log('Visita número', localStorage.numVisitas)

//navigator.geolocation.getCurrentPosition()
 
