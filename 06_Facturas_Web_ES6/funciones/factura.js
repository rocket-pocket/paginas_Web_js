import { Empresa } from './Empresa.js'

export function Factura (tipoIVA, formaPago) {
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