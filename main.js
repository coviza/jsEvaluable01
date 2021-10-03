//Ejercicio 1 

/* 1. Declaro constante para preguntar y un array para introducir los datos 
2. Creo la funcion y pregunto mediante un do-while con las condiciones pautadas en el while
3. Introduzco el resultado de las repuestas en el array mediante .push y retorno el array */

let nombre;
let apellido1;
let apellido2;
let DNI;
let array = [];
function usuario() {
    do {
        nombre = prompt("Como te llamas? ");
        apellido1 = prompt("Cual es tu primer apellido? ");
        apellido2 = prompt("Cual es tu segundo apellido? ");
        DNI = prompt("Dime tu DNI ");

    } while (!isNaN(nombre) || !isNaN(apellido1) || !isNaN(apellido2) || isNaN(DNI) || DNI.length != 8);

    array.push(nombre, apellido1, apellido2, DNI);
    return array;
}


//Ejercicio 2 

/* 1. Dentro de una funcion pregunto por el DNI hasta que se cumplan las condiciones del do-while
2. Declaro variables para almacenar las letras del DNI, calcular el resto de la division y otra 
    para devolver la posicion (resto) de un caracter de la variable stringLetras */

function calcularLetraDni(DNI) {
    /* do {
        var DNI = rl.question("Dime tu DNI ");

    } while (isNaN(DNI) || DNI.length != 8); */

    let stringLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resto = DNI % 23;
    let letraResultado = stringLetras.charAt(resto);
    let dniTotal = DNI + letraResultado;
    return dniTotal;
    /* "La letra asociada a ese DNI es: " + letraResultado + "\n"
        + "El DNI completo es: " + DNI + letraResultado); */
}


//Ejercicio 3

/* NOTA: No he conseguido hacer este ejercicio sin declarar el array, es decir, pasandole las variables
del ejercicio 1 para preguntar por los datos. 

1. Le paso el array predeterminado como parametro a la funcion, declaro el array predeterminado y un 
nuevo array e itero por la longitud del antiguo aplicando la funcion substring para que me devuelva 
los dos primeros caracteres de los strings dentro del array
2. Convertimos los 3 primeros indices a minusculas
3. Declaro una variable suma donde guardare el resultado de iterar el array por la longitud de los 
caracteres del DNI troceandolos de a uno mediante slice e ir sumando los digitos uno a uno 
4. Junto los strings del array mediante .join y retorno el valor de newArray*/

function mostrarUsuario(array) {
    
    let name2 = array[0].substring(0, 2);
    let apellido12 = array[1].substring(0, 2);
    let apellido22 = array[2].substring(0, 2);

    let suma = 0;
    for (let j = 0; j < 8; j++) {
        suma += parseInt(array[3].slice(j, j + 1));

    }
    let resultado = name2 + apellido12 + apellido22 + suma;
    /* console.log("Nombre: " + array[0] + "Apellido: " + array[1] + "Apellido2: "
        + array[2] + "DNI: " + dniTotal + "Usuario: " + resultado); */
    document.write("Nombre: " + array[0] + "<br>");
    document.write("Primer apellido: " + array[1] + "<br>");
    document.write("Segundo apellido: " + array[2] + "<br>");
    document.write("DNI: " + array[3]);
    document.write("Nombre Usuario: " + resultado.toLowerCase());

}


//NOTA: Comandos utilizados para propio testing
/* console.log(usuario());
calcularLetraDni(); 
console.log(mostrarUsuario()); */

let miUsuario = usuario();
miUsuario[3] = calcularLetraDni(miUsuario[3]);
mostrarUsuario(miUsuario);
