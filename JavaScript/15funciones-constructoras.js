//# ############################################## Funciones constructoras ##############################################

//#Funcion constructora
function Curso(titulo, duracion, formato) {
    //! Propiedades
    this.titulo = titulo;
    this.duracion = duracion;
    this.formato = formato;

    //! Metodos
    this.inscribir = function (usuario) {
        console.log(usuario + "Está Inscrito");
    }
}
//#Creación de un objeto
let cursoJavaScript = new Curso("curso java pro", "5hrs", "Mp4");
let cursoRuby = new Curso("Curso de Ruby Pro");

//# Mandar a llamar el objeto
console.log(cursoJavaScript.titulo, cursoJavaScript.duracion, cursoJavaScript.formato);
console.log(cursoRuby.titulo);



