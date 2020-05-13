//# Operadores Lógicos

//*++++++++++++++++++++++++++++++++++++++++++++++++++ AND +++++++++++++++++++++++++++++++++++++++++++++++++++++
//# EN EL OPERADOR AND AMBAS CONDICIONES DEBEN SER VERDADERAS(TRUE) DE LO CONTRARIO RETORNA UN VALOR (FALSE)
if(24 === 24 && "hola" === "hola"){
    alert(true);
  }else{
    alert(false);
  }
//true

if(24 === 24 && "hola" === 13){
    alert(true);
  }else{
    alert(false);
  }
  // false

//! Operador ++++++++++++++++++++++++++++++++++++++++++ OR +++++++++++++++++++++++++++++++++++++++++++++++++++++
//# EN EL OPERADOR OR SOLO UNA CONDICION DEBE SER VERDADERA

if(24 === 24 || "hola" === "hola"){
    alert(true);
  }else{
    alert(false);
  }
//TRUE

if(24 === 24 || "hola" === "ADIOS"){
    alert(true);
  }else{
    alert(false);
  }
  //FALSE

  //$ ++++++++++++++++++++++++++++++++++++++++++++++++ NOT +++++++++++++++++++++++++++++++++++++++++++++++++++++
  //# sirve para negar una condicion verdadera con el simbolo !
!(25 === 25) || (10 < 5)
//false