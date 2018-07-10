//Ejercicio 7 números primos
/* function calcular(){
    for (let i = 0; i < 100; i++) {
        console.log(`son números primos:${i+1}`)
        if (i / 1, i / i) {
            
            return true
        } else {
            return false
            
        }
        
    }
}

calcular() */
var c = 100;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

//Fibonacci

var i;
    var fib = []; // Initialize array!
    
    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=10; i++){
    
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i-2] + fib[i-1];
        console.log(fib[i]);
    }