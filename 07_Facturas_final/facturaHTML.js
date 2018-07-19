import { Empresa } from "./Empresa";

export class FacturaHtml {
    constructor () {
        this.empresa = {
            nombre :  document.querySelector("#empresa-nombre"),
            direccion : document.querySelector("#empresa-direccion"),
            telefono : document.querySelector("#empresa-telefono"),
            nif: document.querySelector("#empresa-nif"  )
        }
        this.cliente = new Empresa(
            document.querySelector("#cliente-nombre"),
            document.querySelector("#cliente-direccion"),
            document.querySelector("#cliente-telefono"),
            document.querySelector("#cliente-nif")
        )
        this.importeTotal = document.querySelector("#importeTotal")
        this.tipoIVA = document.querySelector("#tipoIVA")
        this.formaPago = document.querySelector("#formaPago")
        this.tabla = `                
            <table>
                <tr>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </table>`
    }

    pintarDatos() {
        this.empresa.nombre.innerHTML = '*****' //todos son nodos del DOM
        this.empresa.direccion = '*****' 
        this.empresa.telefono = '*****'
        this.empresa.nif = '*****'
        this.cliente.nombre = '*****'
        this.cliente.direccion = '*****' 
        this.cliente.telefono = '*****'
        this.cliente.nif = '*****'
        this.importeTotal = '*****'
        this.tipoIVA = '*****'
        this.formaPago = '*****'
    }

}