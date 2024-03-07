// Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
function sigma(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}
console.log(sigma(3));
console.log(sigma(5));