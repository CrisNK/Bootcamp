// Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function contarPositivos(array) {
  var counter = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] > 0) {
      counter++;
    }
  }
  array.pop();
  array.push(counter);
  return array;
}
console.log(contarPositivos([-1, 1, 1, 1]));