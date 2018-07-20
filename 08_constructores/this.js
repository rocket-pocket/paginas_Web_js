// THIS -> puede ser el objeto global

/* console.log(this)

function prueba() {
    console.log(this)
}

prueba() */

// THIS -> objeto

/* let o = {
    nonbre: 'Pepe',
    mostrar: function () {
        console.log(this)
    }
}

o.mostrar() */

// THIS -> el objeto creado

function CosaRara() {
    console.log(this)
}

//cosaRara()

new CosaRara()  //new -> crea un nuevo objeto 


//THIS -> es quién yo decida //call y apply