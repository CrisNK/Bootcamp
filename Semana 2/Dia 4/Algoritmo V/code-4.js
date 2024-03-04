//Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repetirValores(array) {
  for (var i = 0; i < array.length; i++){
    array.splice((i + 1), 0, array[i]);
    i++;
  }
  return array;
}
let array = [4, "Ulysses", 42, false];
let newArray = repetirValores(array);
console.log(newArray);