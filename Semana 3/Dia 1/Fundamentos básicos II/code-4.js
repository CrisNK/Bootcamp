// Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function doble(array) {
  for (var i = 0; i < array.length; i++){
    array[i] = array[i] * 2;
  }
  return array;
}
console.log(doble([1, 2, 3]));