// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function evensAndOdds(array) {
  var counterEvens = 0, counterOdds = 0;
  for (var i = 0; i < array.length; i++){
    // Verificación para saber si es par o impar, 
    if ((array[i] % 2) == 0) {
      counterOdds = 0;
      counterEvens++;
    } else {
      counterEvens = 0;
      counterOdds++;
    }
    // Verificación de los contadores para imprimir el mensaje
    if (counterEvens == 3) {
      console.log("¡Es para bien!");
      counterEvens = 0;
    }
    if (counterOdds == 3) {
      console.log("¡Qué imparcial!");
      counterOdds = 0;
    }
  }
}