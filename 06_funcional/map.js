// const numeros = [1, 2, 3, 4, 5, 5, 432, 543, 1, 87]
// const newnum = []
// for (let i = 0; i < numeros.length; i++) {
//     newnum.push(numeros[i]*2);
//         return newnum

// }
// console.log(numeros())
// console.log(newnnum())

// const multiplicar2 = () => {
//     const nuevosnum = []
//     for (let i = 0; i < numeros.length; i++) {
//         nuevosnum.push(numeros[i] * 2);
//     }
//     return nuevosnum
// }
// console.log(multiplicar2())

// const mapmul= ()=> {
//     const numnew = numeros.map(numero => numero*2)
//     return numnew
// }
// console.log(mapmul)

const lista = [{ id: 1, name: `Perro` }, { id: 2, name: `Gato` }, { id: 3, name: `Caballo` }, { id: 4, name: `Burro` }]
// const getname = () =>{
//     const namelist= lista.map(objeto=>objeto.name)
//     return namelist
// }
// let namelist= getname()
// console.log(namelist)
// const getfive = () => {
//     const newarreglo = new Array;
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i].name.length >4) {
//             newarreglo.push(lista[i])
//         }

//     }
//     return newarreglo
// }
// let namesa = getfive()
// console.log(namesa)
// const filtrado = () => {
//     const listanombres = lista.filter(objeto => objeto.name.length > 4)
//     return listanombres
// }
// let namesle= filtrado()
// console.log(namesle)

// Ejercicio 1

const animal = [
    { nombre: "carlitos",   especie: "conejo" },    // 0
    { nombre: "esteban",    especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita",      especie: "gato" },      // 3
    { nombre: "miranda",    especie: "conejo" },    // 4
    { nombre: "lucas",      especie: "conejo" },    // 5
    { nombre: "Horacia",    especie: "tortuga" }    // 6
];

const conejos = ()=>{
    const animales = animal.filter( objeto =>objeto.especie === `conejo` )
        
    return animales;
};
console.log(conejos())


const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];
const nommas= ()=>{
    const nombres = mascotas.map(objeto=>objeto.nombre)
    return nombres
}
console.log(nommas())