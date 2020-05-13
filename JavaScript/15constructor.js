class claseCurso {

    //!Constructor
    constructor(nombre, duracion, marca = "Codigo Facilito"){
        //*Parametros
        this.nombre = nombre;
        this.duracion = duracion;
        this.marca = marca
    }

}
//*declaracion del objeto java
java = new claseCurso("Java Professional", 2, "platzi");
console.log("nombre: " + java.nombre);
console.log("horas: " + java.duracion);
console.log("Marca " + java.marca);


php = new claseCurso("PHP Professional", 3);
console.log("nombre: " + php.nombre);
console.log("horas: " + php.duracion);
console.log("marca " + php.marca);