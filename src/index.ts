//declaraciones
let array: number[] = new Array(10);
let i: number;
//funcion
function azar(num: number): number {
  return Math.floor(Math.random() * num);
}
//for + funcion que carga los valores
for (i = 0; i < 10; i++) {
  array[i] = azar(100);
  console.log("en la posicion " + i, "se ingreso el numero " + array[i]);
}
