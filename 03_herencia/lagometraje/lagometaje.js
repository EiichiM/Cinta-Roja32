class largometraje {
    constructor(title, duracion) {
        this.title = title
        this.duracion = duracion
    }
    getTitle() {
        return `Estamos reproduciendo ${this.title}`  
    }
    tiempo (){ 
        return ` Este es el tiempo de duracion ${this.duracion} mins`
     }
}

// let Eiichi = Eiichi

module.exports = { largometraje }