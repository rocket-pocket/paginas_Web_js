//Declaración


/**
 * Calculará el área de diversas figuras
 * 
 * 1er @parametro será el nombre de la figura (string)
 * 2º  @datos de la figura (en un objeto)
 *      si es rinagulo h y b
 *      si es cuadrado l
 *      si es circulo r
 * 3 º @return área de la figura
  */

  /**
   *    switch (key*nombre del parametro) {
        case value *triangulo:
            
            break;
    
        default:(cuando no fuera ni triangulo ni cuadrado que quieres que pase)
            break;
    }

    return resultado
}
   */
function calcularArea(figura, datos){
    let resultado = 1

    switch (figura.toLowerCase()) {
        case 'triangulo':
        case 'triángulo':

           /*  for (let index = 0; index < array.length; index++) { //este bucle vale para Arrays no puedo usra esta bucle
                const element = array[index];
                
            } */

            //datos = {h:12, b:10}

            for (const key in datos) { //usamos el forin
                resultado *= datos[key]
                    
                }
             
            resultado /= 2            
            break;
        case 'cuadrado':
            resultado = datos.l * datos.l
            break;
        case 'circulo':
        case 'círculo':
            resultado = datos.r * datos.r * Math.PI
            break;
        
        default: 
            break;
    }

    return resultado.toFixed(2)
}
function probar(){
    let figura = 'triangulo'
    let datos = {h:12.3, b:10.5}
    console.log(calcularArea(figura, {h:12, b:10}))
    figura = 'cuadrado'
    datos = {l:10}
    console.log(calcularArea(figura, datos))
    figura = 'circulo'
    datos = {r:10}
    console.log(calcularArea(figura, datos))
}
//Invocar
probar()


