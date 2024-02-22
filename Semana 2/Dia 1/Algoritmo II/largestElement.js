// Crea una función que entregue el elemento más grande (largest element) en un array. Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.
var array = [1, 30, 5, 7];
function largestElement(array) {
    var maxElement = array[0];
    for (var i = 0; i < array.length; i++){
        if (maxElement < array[i]) {
            maxElement = array[i];
        }
    }
    return maxElement;
}
var maxElement = largestElement(array);
console.log("El elemento más grande del arreglo es:", maxElement);