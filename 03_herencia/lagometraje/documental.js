const { largometraje } = require("./lagometaje")

class Documental extends largometraje {
    constructor(title, duracion, director){
    super(title, duracion)

    this.director = director;
    }
}


module.exports = { Documental}