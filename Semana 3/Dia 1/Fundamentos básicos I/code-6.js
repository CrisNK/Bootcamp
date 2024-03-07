// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function average(array) {
  var average = 0, sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}