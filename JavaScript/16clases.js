//# Como definir una clase
/*
class nombreClase{

    //Constructor
    constructor(titulo){
    this.titulo = titulo;
    }

    //Metodo
    inscribir(usuario){
        console.log(usuario + "Esta inscrito");
    }
}

let obj = new nombreClase();
let objeto = new  nombreClase("curso nuevo");

obj.inscribir("Luis ")
console.log(objeto.titulo);
*/
//! Definir una clase
//*clase
class Perro {
    // ++++++++++ constructor ++++++++++
    constructor(nombre, genero) {
        //atributos
        this.nombre = nombre;
        this.genero = genero;
    } // ++++++++++ constructor ++++++++++

    //++++++++++ Metodo ++++++++++
    ladrad() {
        console.log(` guaf guaf mi nombre es ${this.nombre}`);
    }
    caminar(){
        console.log("Toy caminando");
    }
    //++++++++++ Metodo ++++++++++
} // ++++++++++ clase ++++++++++

const simba = new Perro("simba", "macho");
console.log(simba);//! mandar a llamar al objeto
simba.ladrad();//! mandar a llamar al metodo

//! +++++++++++++++++++++++++++++++++++++ Herencia +++++++++++++++++++++++++++++++++++++
class Gato extends Perro{
    constructor(nombre, genero, color){
        super(nombre, genero);
        this.color = color;
    }
    ladrad(){
        console.log(`miau miau mi nombre es ${this.nombre}`);
    }
}
const beto = new Gato("beto","hembra","blanco");
console.log(beto);
beto.ladrad();
beto.caminar();
