// Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

// Método automático
function invertir1(array) {
  return array.reverse();
}
console.log(invertir1([3, 1, 6, 4, 2]));

// Método manual - Usando una variable auxiliar, sin ocupar el array auxiliar
function invertir2(array) {
  var aux;
  for (var i = 0; i < (array.length) / 2; i++) {
    aux = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = aux;
  }
  return array;
}
console.log(invertir2([3, 1, 6, 4, 2]));

// Yo lo llamo método abstracto - Haciendo swap entre valores del array
function invertir3(array) {
  for (var i = 0; i < (array.length) / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }
  return array;
}
console.log(invertir3([3, 1, 6, 4, 2]));