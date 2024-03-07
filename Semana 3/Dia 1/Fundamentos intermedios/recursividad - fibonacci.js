// Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto. 
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(7));
// 0, 1, 1, 2, 3, 5, 8, 13