// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function sumOfOddNumbers() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++){
    if ((i % 2) !== 0) {
      sum += i;
    }
  }
  return sum;
}