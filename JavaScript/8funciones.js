/* +++++++++ en una funcion imprime un numero del 0 hasta el que el usuario quiere.

var num = prompt("introduce un numero");

function cuenta(num){
    for(var i=1; i<=num; i++){
        document.write(i+"\n");
    }
 }cuenta(num);
*/
/* Funcion que convierte cadenas con minusculas a cadenas con mayusculas
var nom = prompt("Ingresa tu nombre");

function NombreMayus(){
nombre = nom.toUpperCase()
document.write(nombre)
}NombreMayus()
*/

function cuadrado(numero) {
    return numero * numero;
}
let valor = cuadrado(2);
console.log(valor);