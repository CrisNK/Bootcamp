// 1. Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 
function countGreaterThanY(array, Y) {
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] > Y) {
            count++;
        }
    }
    return count;
}