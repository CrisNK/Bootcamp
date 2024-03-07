// Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.
function secondMoreGreater(array) {
  let max = 0, secondMax = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] > max) {
      max = array[i];
    }
    if ((array[i] > secondMax) && (array[i] != max)) {
      secondMax = array[i];
    }
  }
  return secondMax;
}
console.log(secondMoreGreater([42,1,4,3.14,7]));