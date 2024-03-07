// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function maxMinAvg(array) {
  var max = array[0], min = array[0], sum = 0, average = 0, newArray = [];
  for (var i = 0; i < array.length; i++){
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
    sum += array[i];
  }
  average = sum / array.length;
  newArray.push(max);
  newArray.push(min);
  newArray.push(average);
  return newArray;
}
console.log(maxMinAvg([1,5,10,-2]));