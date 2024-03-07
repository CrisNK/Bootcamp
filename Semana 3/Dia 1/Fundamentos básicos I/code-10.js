// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function convertNegativesToZero(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
  return array;
}