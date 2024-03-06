// Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function devolverValor(array) {
  console.log(array[array.length - 2]);
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      return array[i];
    }
  }
}