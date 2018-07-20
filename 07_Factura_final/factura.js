import { Empresa } from './Empresa.js'

export class Factura {
    constructor (tipoIVA, formaPago) {
        this.empresa = new Empresa(
            'Boracay Ediciones',
            'c/ Pez',
            '587 349 785',
            'Z-345123876')
        this.cliente = ''
        this.elementos = []
        this.importeTotal = 0
        this.tipoIVA = tipoIVA
        this.formaPago = formaPago
    }  

    setCliente(nombre, direccion, telefono, nif) {
        this.cliente = new Empresa(
            nombre, 
            direccion, 
            telefono, 
            nif)
    }

    mostrar() {
    // muestre por pantalla el importe total 
    // de la factura en un formato HTML adecuado.
        this.calculaImporteTotal()
        this.pintaDatos()
    }

    calculaImporteTotal() {
    // actualice el valor de la propiedad correspondiente
        this.importeTotal = 0
        this.elementos.forEach(
            (item) => {
                this.importeTotal +=
                item.precio*item.cantidad*this.tipoIVA
            }
        )
    }

    pintaDatos(oDatos = this) {
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
}
