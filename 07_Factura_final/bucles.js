
let aDatos = [1,2,3,4]

for (let i = 0; i < aDatos.length; i++) {
    const iterator = aDatos[i];
    console.log(iterator)
}

aDatos.forEach(iterator => 
     console.log(iterator)
); 

for (const iterator of aDatos) {
     console.log(iterator);
}


/*  for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
} */
