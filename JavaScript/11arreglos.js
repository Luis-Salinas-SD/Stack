//! +++++++++++++++++++++++++++++++++++++++++++++ ARREGLOS ++++++++++++++++++++++++++++++++++++++++++++++++++++
//$declaración:
/* let arreglo = ["hola", 1, true, {}]; */

//#declarar un arreglo y recorrerlo
/* let arreglo = [5, 9, 6];

for (let i = 0; i < arreglo.length; i++) {
    const elemento = arreglo[i];
    console.log(elemento);
} */

//& agregar y quitar elementos de un arreglo:
//$    push     pop     unshift     shift

let array = [50, 53, 100, 45];
// array.push(15); //agrega un elemento al final
 //array.pop() // quita el ultimo elemento.

 // array.unshift("hola"); //agrega un elemento al incio
 // array.shift(); //quita un elemento al inicio
//console.log(array);

//# agregar y quitar elementos de un arreglo en una posicion personalizada:
let names = ["luis", "ana", "dan", "sergio", "luchita", "concha"];
//             0       1     2        3         4           5
//!splice(#indice en el que se agrgaran, #cantidad de elemento que se van a eliminar #valores que se van a aregar 1,2,3...)

//!Agrega los valores juan y lola en la posicion 3
//names.splice(3,0, 5, 8);

//!Elimina el valor o valores en la poscicon descrita en este caso eliminaos 3 elementos en la poscion 3
//names.splice(0,3);
//console.log(names);

//! Slice extrae en un nuevo array los valores desde [starat] hasta [end -1]: No modifia el array original.

let nuevo = names.slice(1,3);
console.log(nuevo);
