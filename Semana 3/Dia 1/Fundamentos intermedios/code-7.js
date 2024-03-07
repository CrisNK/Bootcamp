// Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function duplicatingArray(array) {
  let i = 0;
  while (array[i] != null) {
    array.splice(i + 1, 0, array[i]);
    i+=2;
  }
  return array;
}
console.log(duplicatingArray([4,'Ulysses', 42, false]));