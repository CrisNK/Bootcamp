// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function returnNumbers() {
  var array = [];
  for (var i = 1; i < 256; i++){
    array.push(i);
  }
  return array;
}