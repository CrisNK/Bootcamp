// 2) Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)
function returnOddArray() {
    var array = [];
    for (var i = 1; i <= 255; i++) {
        if ((i % 2) != 0)
            array.push(i);
    }
    return array;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]