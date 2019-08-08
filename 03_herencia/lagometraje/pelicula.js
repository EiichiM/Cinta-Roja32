const { largometraje } = require("./lagometaje")

class Pelicula extends largometraje {
    constructor(title, duracion, genero) {
        super(title, duracion)
        this.genero = genero
    }
    
}

module.exports = { Pelicula}