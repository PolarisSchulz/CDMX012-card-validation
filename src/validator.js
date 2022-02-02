const validator = {
  //string
  isValid: function (cardNumber) {
    let card = Array.from(cardNumber).reverse(); // y vamos a ocupar el array from console y revertir
    //console.log(cardNumber);
    let sumaDeNumeros = 0;
    let booleanoValidacion = false;
    for (let i = 0; i < card.length; i++) {
      //recorrer el array  blucle for
      // console.log("for"+i)
      if (i % 2 !== 0) {
        card[i] = card[i] * 2; //identificar pares y nones y multiplicar por 2
        console.log(card);
        if (card[i] > 9) {
          card[i] = card[i] - 9; //en los numeros mayores a 10 o iguales, restar 9
          console.log(card[i]);
        }
      } else {
        card[i] = parseInt(card[i]); //cambiar el tipo de dato
      }
      sumaDeNumeros = sumaDeNumeros + card[i]; //acumulador o la suma de  todos los numeros
      console.log("+" + sumaDeNumeros);
    }
    if (sumaDeNumeros % 10 === 0) {
      booleanoValidacion = true; //verdadero numero o coreecto que si se valida
      console.log(booleanoValidacion);
    } else {
      booleanoValidacion = false; //falso numero o error que no se valida la tarjeta
    }
    console.log("resultado" + booleanoValidacion); //resultado del booleano
    return booleanoValidacion;
  },
  maskify: function (mask) {
    let maskify = mask.toString().replace(/.(?=.{4})/g, "#");
    console.log(maskify);//es una expresion regular
    return maskify;
  },
};
//console.log(typeof card);
export default validator;
