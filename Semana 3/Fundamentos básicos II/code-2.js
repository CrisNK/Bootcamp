// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function printSmallerReturnGreater(array) {
  var smaller = array[0], greater = array[0];
  for (var i = 0; i < array.length; i++){
    if (smaller > array[i]) {
      smaller = array[i];
    }
    if (greater < array[i]) {
      greater = array[i];
    }
  }
  console.log(smaller);
  return greater;
}