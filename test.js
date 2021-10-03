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

function calcularLetraDni(DNI) {
    /* do {
        var DNI = rl.question("Dime tu DNI ");

    } while (isNaN(DNI) || DNI.length != 8); */

    var stringLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var resto = DNI % 23;
    var letraResultado = stringLetras.charAt(resto);
    console.log("La letra asociada a ese DNI es: " + letraResultado + "\n"
        + "El DNI completo es: " + DNI + letraResultado);
}

function mostrarUsuario(array){

    var num = array[3].substr(0, 8);
    var suma = 0;
    for (var i=0; i<8; i++) {
        suma += parseInt(num.substr(i, 1));       
}
var usuario =

      array[0].substr(0, 2).toLowerCase() +
      array[1].substr(0, 2).toLowerCase() +
      array[2].substr(0, 2).toLowerCase() +
      suma;
   
    console.log("Nombre: " + array[0]);
    console.log("Primer apellido: " + array[1]);
    console.log("Segundo apellido: " + array[2]);
    console.log("DNI: " + array[3]);
    console.log("Nombre Usuario: " + usuario);
}

//console.log(mostrarUsuario());
//mostrarUsuario();
//console.log(oldArray);
//console.log(newArray);

let miUsuario = usuario();
miUsuario[3] = calcularLetraDni(miUsuario[3]);
mostrarUsuario(miUsuario);


  
