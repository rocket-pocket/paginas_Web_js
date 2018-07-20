import { Empresa } from "./Empresa.js";

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
        this.elementosTabla = document.querySelector("#elementos-tabla")
        this.importeTotal = document.querySelector("#importeTotal")
        this.tipoIVA = document.querySelector("#tipoIVA")
        this.formaPago = document.querySelector("#formaPago")
    }

    pintarDatos(facturaDatos) {
        console.dir(facturaDatos)
        this.empresa.nombre.innerHTML = facturaDatos.empresa.nombre
        this.empresa.direccion.innerHTML = facturaDatos.empresa.direccion 
        this.empresa.telefono.innerHTML = facturaDatos.empresa.telefono
        this.empresa.nif.innerHTML = facturaDatos.empresa.nif
        this.cliente.nombre.innerHTML = facturaDatos.cliente.nombre
        this.cliente.direccion.innerHTML = facturaDatos.cliente.direccion
        this.cliente.telefono.innerHTML = facturaDatos.cliente.telefono
        this.cliente.nif.innerHTML = facturaDatos.cliente.nif
        this.importeTotal.innerHTML = facturaDatos.importeTotal
        this.tipoIVA.innerHTML = facturaDatos.tipoIVA
        this.formaPago.innerHTML = facturaDatos.formaPago
        this.elementosTabla.innerHTML = 
                this.crearTabla(facturaDatos.elementos)
    }

    crearTabla(elementosDatos) {
        console.log(elementosDatos)
        let tabla =
            `<tr class="tabla-title">
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>`

        elementosDatos.forEach(item => {
            tabla +=
                `<tr>
                <td>${item.descripcion}</td>
                <td>${item.precio}</td>
                <td>${item.cantidad}</td>
            </tr>`
        });
        return tabla
    }

}