let pepe = {
    nombre: 'Pepe',//prpiedad
    saludar: function(){//puede tener funciones que se llaman metodos
        console.log(`hola soy ${this.nombre}`)//hola soy Pepe
    }
}

//pepe.saludar()//hola soy Pepe

jose = pepe //-> estamos renombrando el objeto que hemos llamado pepe
jose.saludar()//hola soy Pepe

let saludarFuera = pepe.saludar

pepe.saludar()//hola soy Pepe
saludarFuera()//hola soy undefined

saludarFuera.call(pepe)//hola soy Pepe //call -> metodo especial de las funciones le estamos diciendo que ejecute this pepe

setTimeout(() => {console.log('ya llego')}, 3000)//funcion arrow
setTimeout(pepe.saludar, 3000)//undefined
setTimeout(pepe.saludar.bind(pepe), 3000) // es como un call pero es como si le dijera al sistema, cuando hayan pasado tres segundo coges el objeto pepe y ejecutas la funcion saludar, es como si dijeses pegate al objeto con pegamento

//funcion con parentesis -> this vale lo que haya por delante de la función  ej -> pepe.saludar() -> this vale pepe

//ej sin nombre saludarFuera() -> delante no lleva nada -> resultado undefined

//la unica excepcion seria:
//saludarFuera.call(pepe) 
//es como decirle pepe.saludarFuera()


// Ejemplos de EJECUCION DIRECTA de funciones

pepe.saludar() // Pepe
saludarFuera() // undefined
saludarFuera.call(pepe) // Pepe  

// Ejemplos de RESPUESTA A EVENTOS

setTimeout(pepe.saludar, 1000) //undefined

/* 
setTimeout(pepe.saludar.bind(pepe), 1000) // Pepe */


//THIS DEPENDE NO DE LA DEFINICION SI NO DE LA FORMA DE EJECUCIÓN



