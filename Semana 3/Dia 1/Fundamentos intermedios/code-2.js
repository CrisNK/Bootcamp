// Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
function factorial(num) {
  let result = 1; // Declarado empezando en 1 ya que el 0! es 1
  for (let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
}
console.log(factorial(3));
console.log(factorial(5));