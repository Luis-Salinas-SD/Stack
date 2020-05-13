//# Las variables son espacios de memoria reservados para un valor, este puede ser reasignalble.
//# sintaxis:
//# se puede declarar con "var" ó "let"

let nombre = "Luis";
var apellido = prompt('¿Cual es su apellido?');
//# Las constantes son espacios de memoria pero el valor no puede ser reasignado.
//# sintaxis:
//# se pueden declarar con "let"

const pi = 3.1416;

//! Bonus
var manzana = 10, peras = 5;
var frutas = manzana + peras;

var op = (10 + 2) / 2 + 4 * 2;

var igual;
igual = ('a' === 'a'); //true

var desigual;
desigual = ('adios' !== 'hola'); //true

var mayor;
mayor = (6 >= 6); //true

var menor;
menor = (6 <= 6); //true
