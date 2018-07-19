function Factura(empresa,total){
    this.empresa = empresa
    this.total = total
}

Factura.prototype.mostrar = function(){//Ultimo paso o mejor dicho mejorado
    console.log(this) 
}

let f1 = new Factura('Boracay', 200)
f1.concepto = 'Libros'
let f2 = new Factura('google',3000)
f1.mostrar()
f2.mostrar()
/* console.log(f1) 
console.log(f2) */