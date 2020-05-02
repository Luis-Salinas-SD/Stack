//!arreglos
/* let arreglo = [5, 9, 6]
for (let i = 0; i < arreglo.length; i++) {
    const elemento = arreglo[i];
    console.log(elemento);

} */

//# Metodos para recorrer o manipular un arreglo
//* forEache()  sirve para recorrer un arreglo
//! filter() sirve para eliminar un elemento del arreglo
//$ find() metodo para buscar un elemento dentro del arreglo
//? map() genera un nuevo arreglo para una operacion definida

let arreglo = [1,2,3,4,5]

//*f oreach()
/* arreglo.forEach(element => {console.log(element);}
); */
//! filter
/* arreglo = arreglo.filter((del)=> del != 2)
console.log(arreglo) */
//
//$ find()
/*  elemento = arreglo.find( elemento => elemento === 2)
 console.log(elemento); */

//? map()
let numeros = [5,8,9,6];
let  cuadrado = numeros.map( num => num * num)
console.log(cuadrado);


