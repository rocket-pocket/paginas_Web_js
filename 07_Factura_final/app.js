import {Elemento} from './elementos.js'
import {Empresa} from './empresa.js'
import {Factura} from './factura.js'
import { FacturaHtml } from './facturaHTML.js';

function crearFactura1() {
    let factura1 = new Factura( 
        1.04, 
        'contado') 

    factura1.empresa = new Empresa(
        'Ediciones Alpiste',
        'c/ Piolin',
        '587 349 785',
        'Z-345123876')

    /* factura1.cliente = 
        new Empresa(
            'Libreria Tuatalug',
            'c/ Tortuga',
            '543 987 654',
            'K-434344343') */

    factura1.setCliente(
                'Librería Tuatalug',
                'c/ Tortuga',
                '543 987 654',
                'K-434344343')
    
    factura1.elementos.push(
        new Elemento (
            'La Isla del Tesoro',30,10)
    )

    factura1.elementos.push(
        new Elemento('Drácula', 75, 5)
    )

    factura1.elementos.push(
        new Elemento ('El Señor de los Anillos', 50, 24)
    )

    //factura1.mostrar()
    factura1.calculaImporteTotal()
    new FacturaHtml().pintarDatos(factura1)

}

function crearFactura2() {
    let factura1 = new Factura( 
        1.04, 
        'transferencia' ) 

    factura1.cliente = 
        new Empresa(
            'Librería El Cid',
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




function main() {
    crearFactura1()
    //crearFactura2()
}

document.addEventListener('DOMContentLoaded', main)


