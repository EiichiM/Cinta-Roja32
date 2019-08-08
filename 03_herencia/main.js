// class Mascota {
//     constructor(nombre, patas, cola, edad, raza, velocidad) {
//         this.nombre = nombre;
//         this.patas = patas;
//         this.cola = cola;
//         this.edad = edad;
//         this.raza = raza;
//         this.velocidad = velocidad;
//     }
//     comer(comida) {
//         return `Estoy comiendo un ${comida}`
//     }
//     sonido() {
//         return `Sonido`
//     }
//     mover() {
//         return `me muevo a ${this.velocidad} km/h`
//     }
//     dormir() {
//         return "ZZZzzz"
//     }
// }
// module.exports = { Mascota }

// console.log("hola")

class Maestro {
    constructor(cabeza, brazos, nombre, materia, alumno) {
        this.cabeza = cabeza;
        this.brazos = brazos;
        this.materia = materia;
        this.nombre = nombre;
        this.alumno= alumno;
    }
    dmateria (){
        return `Soy el maestro de ${this.materia} `
    }

    promedio(a, b, c, d) {
        return (a + b + c + d) /40
    }
}
module.exports = { Maestro }