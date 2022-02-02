import validator from "./validator.js";
let btnvalidar = document.getElementById("botonValidarDatosCajaPrincipal");
function validar() {
  document.getElementById("bloqueDeBienvenida").style.display = "none";
  document.getElementById("bloqueDeValidacion").style.display = "block"; //desocultar la parte del verificador
  let numeroDeTarjeta = document.getElementById("creditcardnumber").value; //devuelve un nuevo objeto
  let isValid = validator.isValid(numeroDeTarjeta);
  let alerta = document.getElementById("alertaDeValidacion");
  if (isValid === true) {
    alerta.innerHTML = `<h4>Tarjeta Valida</h4>`;
    alerta.classList.add('valid');
  } else {
    alerta.innerHTML = `<h4>Tarjeta Invalida</h4>`;
    alerta.classList.add('invalid');
  }
  //maskify
  let maskify = validator.maskify(numeroDeTarjeta);
  //let maskify = validator.maskify(numeroDeTarjeta)
  document.getElementById("cardMaskify").innerHTML = maskify;
}
btnvalidar.addEventListener("click", validar);
let btnvalidar2 = document.getElementById("botonRetornarDatosCajaSecundaria");
function validar2() {
  document.getElementById("bloqueDeValidacion").style.display = "none";
  document.getElementById("bloqueDeBienvenida").style.display = "block";
}
btnvalidar2.addEventListener("click", validar2); //Retornar a la parte uno del verificador
//console.log(validator);//
