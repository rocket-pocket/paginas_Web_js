function Persona(nombre, edad){  //función constructora 
    this.nombre = nombre
    this.edad = edad

}
//2 queremos crear una función (saludar)
Persona.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
}

p1 = new Persona('pepito', 56)
p1.saludar()