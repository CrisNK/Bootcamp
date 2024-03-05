// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function squaredArray(array) {
  for (var i = 0; i < array.length; i++){
    array[i] = array[i] * array[i];
  }
  return array;
}
console.log(squaredArray([1, 5, 10, -2]));