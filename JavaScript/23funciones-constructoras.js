//# Funciones constructoras

//*Funcion constructora
function Curso(titulo) {
    //! Propiedades
    this.titulo = titulo;
    this.duracion = 2;
    this.formato = "avi;";

    //! Metodos
    this.inscribir = function (usuario) {
        console.log(usuario + "Está Inscrito");

    }
}
//*Creación de un objeto
let cursoJavaScript = new Curso("curso java pro");
let cursoRuby = new Curso("Curso de Ruby Pro")

console.log(cursoJavaScript.titulo );
console.log(cursoRuby.titulo);



