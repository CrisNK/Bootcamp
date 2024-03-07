// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function sumOfNumbersInArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}