function carnet(num){
    if(isNaN(num * 1) || num < 1  || num > 999999999){
        return 'error'
    }
    
    const LISTA =['t', 'r', 'w', 'a', 'g', 'm', 'y', 'f', 'p', 'd', 'x', 'b', 'n', 'j',' z', 's', 'q', 'v', 'h', 'l', 'c', 'k', 'e', 't'];     
    return LISTA[num%23]
}

function probar(){
    console.log(carnet('pepe'))
    console.log(carnet('47528563'))
    console.log(carnet(100000000))
    console.log(carnet(47159986))
    console.log(carnet(40019986))
}
probar()

