/**
 * ¿Que es un callback?
 * es una funcion que pasa como argumento, otra funcion
 * que luego se invoca dentro de la función externa
 * para completar algun tipo de rutina.
 */

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(1, 2, sum));

setTimeout(function () {
  console.log("hola Javascript");
}, 2000);

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Diego");

// Playground Platzi

export function execCallback(callback) {
  window.setTimeout(callback, 2000);
}
execCallback(() => console.log("log after 2s"));
