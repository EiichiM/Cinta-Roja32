// let reM =()=>{
//     console.log("Hola desde RecibiMensaje")
// };
// let oS =(lafuncionCallBack)=>{
//     lafuncionCallBack()

// };

// oS(reM)

// ejercicio 1
let callback = () => {
    console.log("Soy mi mensaje dentro de un callback");
}

const moMensaje = (callback) => {
    callback();
}
moMensaje(callback)

// Ejercicio 2
const oSuperior = (mensaje, callback) => {
    callback(mensaje);
}

let eLog = (mensaje) => {
    console.log(mensaje);
}

let eWarning = (mensaje) => {
    console.warn(mensaje);
}
oSuperior('Este mensaje warn!', eWarning);
oSuperior('Este mensaje log!', eLog);

// Ejercicio 3
const operacion = (num1, num2, op) => {
    return op(num1, num2);
}

const suma = (num1, num2) => {
    return num1 + num2;
}

const resta = (num1, num2) => {
    return num1 - num2;
}

const multiplicacion = (num1, num2) => {
    return num1 * num2;
}

console.log(operacion(9, 5, suma));
console.log(operacion(9, 5, resta));
console.log(operacion(9, 5, multiplicacion));
// Ejerciciom 4

const cFormato = (cadena, callback) => {
    return callback(cadena);
}

const mayus = (cadena) => {
    return cadena.toUpperCase();
}

const minus = (cadena) => {
    return cadena.toLowerCase();
}

console.log(cFormato('PejeLagarto', mayus));
console.log(cFormato('PejeLagarto', minus));

// Ejercicio 5

const dosHoras = (arreglo, callback) => {
    return callback(arreglo);
}

const horas = (arreglo) => {

    let narray = [];

    for (let i = 0; i < arreglo.length; i++) {

        if (arreglo[i] >= 120) {
            narray.push(arreglo[i]);
        }
    }

    return narray;
}

const final = dosHoras([821,1283,232,12,213,1234,32143124,431324,3,4], horas);
console.log(final);