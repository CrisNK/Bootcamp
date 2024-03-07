// Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function alwaysHungry(array) {
  for (var i = 0; i < array.length; i++){
    var containsFood = false;
    if (array[i] == 'comida') {
      console.log('yummy');
      containsFood = true;
    }
  }
  if (!containsFood) {
    console.log('tengo hambre');
  }
}
alwaysHungry(['comida', 'comida', 'comida', 'comida']);
alwaysHungry(['apple', 'apple', 'apple', 'comida']);
alwaysHungry(['apple', 'apple', 'apple', 'apple']);