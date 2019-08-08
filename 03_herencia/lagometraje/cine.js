const { Pelicula } = require("./pelicula")
const { Documental } = require("./documental")

class Cine {
    constructor(sala) {
        this.sala = sala
    }
    reproducir(largometraje) {
        console.log( `Se esta reproduciendo ${largometraje.getTitle()} en la ${this.sala} `)
    }
}
const losAnimalesDelBosque = new Documental("Los animales del Bosque", 98, "YOMERO")
const laDamasDeSangre = new Pelicula("La Dama de Sangre", 120, "Terror")
const cineteca = new Cine("Sala IMAX")

// console.log(laDamasDeSangre)

// console.log(losAnimalesDelBosque)

cineteca.reproducir(losAnimalesDelBosque)