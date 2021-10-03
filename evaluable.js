//Ejercicio 1 

/* 1. Declaro constante para preguntar y un array para introducir los datos 
2. Creo la funcion y pregunto mediante un do-while con las condiciones pautadas en el while
3. Introduzco el resultado de las repuestas en el array mediante .push y retorno el array */

const rl = require('readline-sync');
var array = [];
function usuario() {
    do {
        var nombre = rl.question("Como te llamas? ");
        var apellido1 = rl.question("Cual es tu primer apellido? ");
        var apellido2 = rl.question("Cual es tu segundo apellido? ");
        var DNI = rl.question("Dime tu DNI ");

    } while (!isNaN(nombre) || !isNaN(apellido1) || !isNaN(apellido2) || isNaN(DNI) || DNI.length != 8);

    array.push(nombre, apellido1, apellido2, DNI);
    return array;
}


//Ejercicio 2 

/* 1. Dentro de unua funcion pregunto por el DNI hasta que se cumplan las condiciones del do-while
2. Declaro variables para almacenar las letras del DNI, calcular el resto de la division y otra 
    para devolver la posicion (resto) de un caracter de la variable stringLetras */

function calcularLetraDni(DNI) {
    do {
        var DNI = rl.question("Dime tu DNI ");

    } while (isNaN(DNI) || DNI.length != 8);

    var stringLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var resto = DNI % 23;
    var letraResultado = stringLetras.charAt(resto);
    console.log("La letra asociada a ese DNI es: " + letraResultado + "\n"
        + "El DNI completo es: " + DNI + letraResultado);
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

function mostrarUsuario(oldArray) {
    var oldArray = ["Pablo", "Coviza", "Del Moral", "12345678"];
    var newArray = [];
    for (var i = 0; i < oldArray.length; i++) {
        newArray[i] = oldArray[i].substring(0, 2);
    }        
    newArray[0] = newArray[0].toLowerCase();
    newArray[1] = newArray[1].toLowerCase();
    newArray[2] = newArray[2].toLowerCase();
    
    var suma = 0;
    for (var j = 0; j < 8; j++) {
        suma += parseInt(oldArray[3].slice(j, j + 1));

    }
   
    newArray[3] = suma;
    newArray = newArray.join('');
    return newArray;
}


/* 
//NOTA: Comandos utilizados para propio testing
console.log(usuario());
calcularLetraDni(); 
console.log(mostrarUsuario());*/

/* let miUsuario = usuario();
miUsuario[3] = calcularLetraDni(miUsuario[3]);
mostrarUsuario(miUsuario); */
