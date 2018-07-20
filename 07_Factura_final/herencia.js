class Persona {
    constructor (nombre, edad, pais = 'España') {//pais = 'España' -> parametro por defecto
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }
    mostrar() {
        console.log(this);
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} de ${this.pais} y tengo ${this.edad} `)
    }
}

p1 = new Persona('Pepe', 34)//p1 = new Persona('Pepe', 34) -> es una instancia de Persona
p1.mostrar()
p2 = new Persona('Rosa', 45, 'Ecuador')
p2.mostrar()

class Estudiante extends Persona{
    constructor(nombre, edad,  numeroDeMatricula, curso,pais){
        super(nombre, edad, pais = 'España')
        this.numeroDeMatricula = numeroDeMatricula
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`soy estudiante de ${this.curso}`)
    }
}
p3 = new Estudiante('ramon', 65, 0475321, '5ºB')
p3.mostrar()

e4 = new Estudiante('Ramiro', 23, 'Francia', 'matematicas')
e4.saludar()






