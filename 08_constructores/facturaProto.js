function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre 
    this.direccion = direccion 
    this.telefono = telefono 
    this.nif = nif 
}
function Elemento (descripcion, precio, cantidad) {
    this.descripcion = descripcion
    this.precio = precio
    this.cantidad = cantidad
}

function Factura (tipoIVA, formaPago) {
    this.cliente = ''
    this.elementos = []
    this.importeTotal = 0
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
}

Factura.prototype.mostrar = function() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
        this.calculaImporteTotal()
        this.pintaDatos()
    }

Factura.prototype.calculaImporteTotal = function() {
    // actualice el valor de la propiedad correspondiente
        this.importeTotal = 0
        this.elementos.forEach(
            (item) => {
                this.importeTotal +=
                item.precio*item.cantidad*this.tipoIVA
            }
        )
    }

Factura.prototype.pintaDatos = function(oDatos = this) {
    for (const key in oDatos) {
        if ((typeof oDatos[key] !== 'function')) {
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

Factura.prototype.empresa =  new Empresa(
    'Boracay Ediciones',
    'c/ Pez',
    '587 349 785',
    'Z-345123876')
Factura.prototype.ivaBase = '1.16'
// console.log(Factura.prototype)

function crearFactura1() {
    let factura1 = new Factura( 
        1.04, 
        'contado') 

    factura1.empresa = new Empresa(
        'Ediciones Alpiste',
        'c/ Piolin',
        '587 349 785',
        'Z-345123876')

    factura1.cliente = 
        new Empresa(
            'Libreria Tuatalug',
            'c/ Tortuga',
            '543 987 654',
            'K-434344343')

    factura1.elementos.push(
        new Elemento (
            'La Isla del Tesora',30,10)
    )

    factura1.elementos.push(
        new Elemento('Dracula', 75, 5)
    )

    factura1.elementos.push(
        new Elemento ('El Señor de loas Anillos', 50, 24)
    )

    factura1.mostrar()
}

function crearFactura2() {
    let factura1 = new Factura( 
        1.04, 
        'transferencia' ) 

    factura1.cliente = 
        new Empresa(
            'Libreria El Cid',
            'c/ Valencia',
            '543 986 654',
            'K-434894343')

    factura1.elementos.push(
        new Elemento (
            'Frankenstein',30,10)
    )

    factura1.elementos.push(
        new Elemento('La Peste', 75, 5)
    )

    factura1.elementos.push(
        new Elemento ('El Hobbit', 50, 24)
    )

    factura1.mostrar()    
    //console.log(factura1)
}

crearFactura1()
crearFactura2()

