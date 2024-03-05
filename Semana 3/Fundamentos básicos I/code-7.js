// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function oddNumbers() {
  var array = [];
  for (var i = 1; i <= 50; i++){
    if ((i % 2) !== 0) {
      array.push(i);
    }
  }
  return array;
}