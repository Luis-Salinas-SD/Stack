/* +++++++++ en una funcion imprime un numero del 0 hasta el que el usuario quiere.

var num = prompt("introduce un numerazo");

function cuenta(num){
    for(var i=1; i<=num; i++){
        document.write(i+"\n");
    }
 }cuenta(num);
*/

var nom = prompt("Ingresa tu nombre");

function NombreMayus(){
nombre = nom.toUpperCase()
document.write(nombre)
}NombreMayus()