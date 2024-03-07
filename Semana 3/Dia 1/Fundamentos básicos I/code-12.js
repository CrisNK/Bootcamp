// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function swapNumbers(array) {
  var aux = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = aux;
  return array;
}
console.log(swapNumbers([1,5,10,-2]));