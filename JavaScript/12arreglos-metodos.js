//# Metodos para recorrer o manipular un arreglo
let arreglo = [10,42,13,34,45];

//* forEache()  sirve para recorrer un arreglo
//* foreach()
/* arreglo.forEach((elemento) => {console.log(elemento);}
); */

//! filter() sirve para eliminar un elemento del arreglo
//! filter
arreglo = arreglo.filter((del)=> del != 42)
console.log(arreglo);

//$ find() metodo para buscar un elemento dentro del arreglo
//$ find()
/*  elemento = arreglo.find( elemento => elemento === 2)
 console.log(elemento); */

//& map() genera un nuevo arreglo para una operacion definida
//& map()
/* let  cuadrado = arreglo.map( (num) => num * num)
console.log(cuadrado); */