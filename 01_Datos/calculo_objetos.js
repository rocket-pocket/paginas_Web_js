function sumar(a) {
    a.resultado = a.num1 + a.num2 
}


let calculos = {
    num1 : 0, 
    num2 : 0,
    result : 0,
    sumar : function (){  //sumar es el metodo
        this.result = this.num1 + this.num2
    },
    mostrar : function (){
    console.log('el resultado es', this.result)
    }
}

calculos.num1 = 23
calculos.num2 = 3
calculos.sumar()
calculos.mostrar()

calculos.error = 'sin errores'//le podemos añadir más propiedades
console.log(calculos)
calculos.borrar = function() {this.result = 0}
calculos.borrar()
calculos.mostrar()

