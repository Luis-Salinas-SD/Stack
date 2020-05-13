//*Declarar un objeto utilizando JSON (Javascript object notation).

let video = {
    titulo: "piloto",
    duración: 2,
    formato: "avi",
    //?arreglo
    arreglo: ["uno", "dos", "tres"],
    //!metodo
    inscribir: function (usuario) {
        console.log(usuario + " Esta inscrito");

    }
}
//* invocar una propiedad el objeto.
/* console.log(video.arreglo); */
//* Invocar metodo
 /* video.inscribir("Juan"); */
//*Editar alguna propiedad de nuestro objeto
/* video.titulo = "Prueba";
console.log(video.titulo); */
//* Editar alguna metodo de nuestro objeto
/* video.inscribir = function () {
console.log("hola soy la funcion editada");
}
