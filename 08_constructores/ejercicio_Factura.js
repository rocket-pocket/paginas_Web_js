function Empresa(nombre,direccion,telefono,nif){
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
    this.datosEmpresa = function(){
        console.log(`datos de la empresa, nombre:${this.nombre} dirección: ${this.direccion}, telefono ${this.telefono}, nif: ${nif} `)
    }
}
let Empresa2 = new Empresa('Librería de la luz', 'c/Pez', 916548968, '4578965A')
Empresa2.datosEmpresa()

let Cliente = new Empresa('Corte Inglés', 'c/goya', 91654865479, '47528869X')
Cliente.datosEmpresa()

function Elementos(name, precio, cantidad){
    this.name = name
    this.precio = precio
    this.cantidad = cantidad
    this.elemento = function(){
        console.log(`Libro: ${this.name}, precio${this.precio}, stock${this.cantidad}`)
    }
}

let Elemento1 = new Elementos('Harry potter', 29, 45)
Elemento1.elemento()
let Elemento2 = new Elementos('Señor de los anillos', 45, 50)
Elemento2.elemento()
let Elemento3 = new Elementos('Matilda', 12, 100)
Elemento3.elemento()
let Elemento4 = new Elementos('JavaScript', 34, 2)
Elemento4.elemento()




