// Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 
function lastN(array, n) {
  if ((array.length - 1) < n) {
    return null;
  }
  return array[n];
}
console.log(lastN([5, 2, 3, 6, 4, 9, 7], 3));