// 1) Analiza los valores de un array y obtén el promedio (average) de esos valores.
function printAverage(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return (sum / x.length);
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5