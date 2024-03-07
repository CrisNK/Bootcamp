// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function numberToString(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i] < 0) {
      array[i] = 'Dojo';
    }
  }
  return array;
}
console.log(numberToString([-1, -3, 2]));