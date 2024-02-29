// 2.Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
function maxMinAverage(array) {
    var max = array[0], min = array[0], average = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
        average += array[i];
    }
    average /= array.length;
    console.log(max);
    console.log(min);
    console.log(average);
}