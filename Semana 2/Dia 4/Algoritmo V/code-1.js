//Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
function resetNegativos(array) {
  for (var i = 0; i < array.length; i++){
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
  return array;
}
let array = [1, 2, -1, -3];
let newArray = resetNegativos(array);
console.log(newArray);