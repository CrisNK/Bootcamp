//Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
function moverAdelante(array) {
  array.shift();
  array.push(0);
  return array;
}
let array = [1, 2, 3];
let newArray = moverAdelante(array);
console.log(newArray);