//# Funcion convensional
/*
function suma(a, b) {
    return a + b;
} console.log(suma(5, 5));
*/
//# Funcion con [arrow-Functions] sumar dos numeros
/*
suma = (a, b) => a + b
console.log(suma(5, 5)); //10
*/
//#arrow-function (imprimir los numeros en pantalla hasta el numero que usuario teclea)
/*
var n = prompt("introduce el numero:");

cuenta = (n) => {
    for (i = 0; i <= n; i++) {
        document.writeln(i);
    }//for
}//arrow-function cuenta
cuenta(n);
*/
//#Funcion arrow-en el contexto

let tutor = {
    nombre: "Luis",
    apellido: "Salinas",
    fullNombre: function () {
        setTimeout(() => { console.log(this.nombre + " " + this.apellido); }, 1000)
    }
}
// console.log(tutor.apellido);
tutor.fullNombre();


//* call() apply() & bind()

