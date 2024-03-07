// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function convertArrayToNegativeNumbers(array) {
  var number;
  for (var i = 0; i < array.length; i++) {
    number = array[i];
    if (number > 0) {
      number *= 2;
      array[i] -= number;
    }
  }
  return array;
}
console.log(convertArrayToNegativeNumbers([1, -3, 5]));