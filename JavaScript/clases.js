//# Como definir una clase

class nombreClase{

    //!Constructor
    constructor(titulo){
    this.titulo = titulo;
    } 


    //!Metodo
    inscribir(usuario){
        console.log(usuario + "Esta inscrito");
    }
}

let obj = new nombreClase(); 
let objeto = new  nombreClase("curso nuevo");

obj.inscribir("Luis ")
console.log(objeto.titulo);
