//#Herencia

//? Definir clase bas o clase PADRE
class Repro {
    play(nombre){
        console.log("Reporduce el video " + nombre);

    }
    duraction(){
        console.log("4 minutos");
    }

}
class Vimeo extends Repro{
    //!Metodo
    /* play(){
        console.log("Reporduce un video");

    }
    duraction(){
        console.log("4 minutos");
    } */
    open(){
        this.redirectToVimeo(this.video);
    }
}

class YouTube extends Repro{
   /* play(){
       console.log("Reporduce un video");

   }
   duraction(){
    console.log("4 minutos");
   }*/
    open(){
        this.redirectToYoutTube(this.video);
    }

}


let vid = new YouTube();
vid.play(2);
