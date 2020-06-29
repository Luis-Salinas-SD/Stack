//# Metodos para recorrer o manipular un arreglo
let arreglo = [10,42,13,34,45,];

//*Recorrer un arreglo con For
/* for (let x = 0; x < arreglo.length; x++) {
    console.log(arreglo[x]);
} */
//*Recorrer un arreglo con for of
/* for (const item of arreglo) {
    console.log(item);
} */
//* forEache()  sirve para recorrer un arreglo
//arreglo.forEach(elemento => {console.log(elemento);});

//* some devuelve true en caso de que ele elemnto se encuentre en el arreglo

//console.log(arreglo.some(el => el === 45));

//! filter() sirve para eliminar un elemento del arreglo
//arreglo = arreglo.filter((del)=> del != 42)
//console.log(arreglo);

//$ find() metodo para buscar un elemento dentro del arreglo
/* elemento = arreglo.find( num => num === 10)
console.log(elemento); */

//& map() genera un nuevo arreglo para una operacion definida
/*let  cuadrado = arreglo.map( (num) => num * num)
console.log(cuadrado);*/