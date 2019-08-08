class Perro {
    constructor(nombre, color, raza, tamaño, velocidad) {
        this.color = color;
        this.raza = raza;
        this.tamaño = tamaño;
        this.velocidad = velocidad;
        this.nombre = nombre;
    }
    // constuctor define atributos
    ladrar () {
        return "Toy ladrando"
    }
    correr (){
        return `Corriendo a ${this.velocidad} km/h`
    }
    comer (comida){
        this.tamaño += 10;
        return `Estoy comiendo ... ${comida} y mi tamaño ${this.tamaño}`
    }

};

const ayudanteDeSanta = new Perro ("Ayudante de ayudanteDeSanta", "cafe", "galgo", "50", "69")

console.log(ayudanteDeSanta)
console.log(ayudanteDeSanta.ladrar())
console.log(ayudanteDeSanta.correr())

const blue = new Perro ("Blue", "azul", "Beagle", 40, 30)

console.log(blue)
console.log(blue.ladrar())
console.log(blue.correr())
console.log(blue.comer())

