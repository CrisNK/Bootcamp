// Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  
function penultimate(array) {
  if (array.length < 2) {
    return null;
  } else {
    return array[array.length - 2];
  }
}
console.log(penultimate([42, true, 'Liam', 7]));
console.log(penultimate([42]));