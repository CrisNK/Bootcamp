// Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
function agregaSiete(array) {
  let newArray = [];
  for (var i = 0; i < array.length; i++){
    newArray.push(array[i] + 7);
  }
  return newArray;
}
console.log(agregaSiete([1, 2, 3]));