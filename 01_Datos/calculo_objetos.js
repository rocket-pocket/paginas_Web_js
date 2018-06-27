function sumar(a) {
    a.resultado = a.num1 + a.num2 
}


let calculos = {
    num1 : 0,
    num2 : 0,
    result : 0,
    sumar : function (){
        this.result = this.num1 + this.num2
    },
    mostrar : function (){
    console.log(calculos.result)
    }
}

calculos.num1 = 23
calculos.num2 = 3
calculos.sumar()
calculos.mostrar()
