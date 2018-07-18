let factura = {
    empresa : {
        nombre : '',
        direccion : '',
        telefono : '',
        nif : ''
    }, 
    cliente : {
        nombre : '',
        direccion : '',
        telefono : '',
        nif : ''
    }, 
    elementos : [
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
        {descripcion : '',
        precio: '',
        cantidad: ''}, 
    ],
    importeTotal : '',
    tipoIVA: '',
    formaPago: ''
}
factura.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
}

factura.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
}

let factura1 = {
    empresa : {
        nombre : 'Boracay Ediciones',
        direccion : 'c/ Pez',
        telefono : '587 349 785',
        nif : 'Z-345123876'
    }, 
    cliente : {
        nombre : 'Libreria Tuatalug',
        direccion : 'c/ Tortuga',
        telefono : '543 987 654',
        nif : 'K-434344343'
    }, 
    elementos : [
        {descripcion : 'La Isla del Tesora',
        precio: 30,
        cantidad: 10}, 
        {descripcion : 'Dracula',
        precio: 75,
        cantidad: 5}, 
        {descripcion : 'El Señor de loas Anillos',
        precio: 50,
        cantidad: 24}, 
    ],
    importeTotal : 0,
    tipoIVA: 1.04,
    formaPago: 'Transferencia',   
}

factura1.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal +=
            item.precio*item.cantidad*this.tipoIVA
        }
    )
}

factura1.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                if (isNaN(key)) {
                    console.log(`Propiedades de ${key}: `)
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key} : ${oDatos[key]}`)
            }    
        }    
    }
}

factura1.mostrar()

