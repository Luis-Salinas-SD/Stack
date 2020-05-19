//! En una funcion imprime un numero del 0 hasta el que el usuario quiere.

/* var num = prompt("introduce un numero");

function cuenta(num){
    for(var i=1; i<=num; i++){
        document.write(i+"\n");
    }
 }cuenta(num); */

//? Funcion que convierte cadenas con minusculas a cadenas con mayusculas

/*
var nom = /* prompt("Ingresa tu nombre"); "luis"

function NombreMayus(nom){
nombre = nom.toUpperCase()
console.log(nombre);

}NombreMayus(nom); */

//! Funcion que calcula el cuadrado de una funcion
/* function cuadrado(numero) {
    return numero * numero;
}
console.log( cuadrado(5)); */


//? Funcion dentro de otra Funcion

/* function accion(hablar) {
hablar();
}

function decirHola() {
    console.log("hola amicos")
}
accion(decirHola); */


//?o

function accion(hablar) {
hablar()
}

accion(function decirHola(){
    console.log("hola amicos como estan");
    }
);