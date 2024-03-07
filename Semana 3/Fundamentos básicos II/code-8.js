// Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function previousLength(array) {
  var string = "";
  for (var i = (array.length - 1); i > 0; i--) {
    string = array[i - 1];
    array.splice(i, 1, string.length);
  }
  return array;
}
console.log(previousLength(['programar', 'dojo', 'genial']));