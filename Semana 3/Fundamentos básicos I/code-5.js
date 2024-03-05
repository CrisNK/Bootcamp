// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function maxNumber(array) {
  var maxNumber = array[0];
  for (var i = 0; i < array.length; i++){
    if (array[i] > maxNumber)
      maxNumber = array[i];
  }
  return maxNumber;
}
console.log(maxNumber([-3, 3, 5, 7]));