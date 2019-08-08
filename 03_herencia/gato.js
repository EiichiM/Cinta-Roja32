// const { Mascota } = require("./main")

// class Gato extends Mascota{
//     constructor(nombre, patas, cola, edad, raza, velocidad, vidas){
//         super(nombre, patas, cola, edad, raza, velocidad)
//         console.log( "Se ha creado un gato")
//         this.vidas = vidas
//     }
//     getVidas (){
//         return this.vidas
//     }

// }
// const Robbin = new Gato ("Robin", 4, 1, 19, "Maltes", 35, 7)

// console.log (Robbin)

const { Maestro } = require("./main")

class Fisica extends Maestro {
    constructor(cabeza, brazos, nombre, materia, alumno, laboratorio) {
        super(cabeza, brazos, nombre, materia, alumno)
        this.laboratorio = laboratorio;

        console.log(this.dmateria())
    }

}
const MFisica = new Fisica(1, 2, "Juan", "Fisica", "Pancho")
console.log(MFisica.promedio(8, 8, 9, 10))
console.log(MFisica)

class Musica extends Maestro {
    constructor(cabeza, brazos, nombre, materia, alumno, instrumento) {
        super(cabeza, brazos, nombre, materia, alumno)
        // console.log(`Soy el nuevo maestro de ${this.materia}`)
        this.instrumento=instrumento;
        
        console.log(this.dmateria())
    }

}
const MMusica = new Musica(1, 2, "Raquel", "Musica", "Julia")
console.log(MMusica.promedio(8, 9, 9, 10))
console.log(MMusica)