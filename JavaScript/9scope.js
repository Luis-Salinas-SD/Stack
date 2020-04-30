/* El scoupe es una colección de variables, funiones y objetos al alacnce del codigo
exiten dos tipos:
Global scoupe [variables globales]
Las variables locales se pueden mandar a llamar en cualquier parte del programas

local scoupe [Variables locales]
Adiferencia de las globales, las locales solo se pueden declarar en la funciones y pueden ser mandadas a llamar
en la misma
*/

let nombre = "luis";
function hola() {
    alert("hola" + nombre);
}hola();

/* 
CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.
VAR: Es una variable que SI puede cambiar su valor y su scope es local.
LET: Es una variable que también podrá cambiar su valor, pero solo funcionará
 en el bloque donde fue declarada(ciclos o  condiciones).
*/