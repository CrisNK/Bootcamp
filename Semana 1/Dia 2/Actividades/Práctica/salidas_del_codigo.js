// Código 1, salida predecida: 0, 1, 2, 3, 4
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// Código 2, salida predecida: 1, 3, 5
for (var i = 0; i < 5; i++) {
    i = i + 1;
    console.log(i);
}
// Código 3, salida predecida: 3, 7
for (var i = 0; i < 5; i++) {
    i = i + 3;
    console.log(i);
}
// Código 4, salida predecida: 5, 8
function y(num1, num2) {
    return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
// Código 5, salida predecida: 2, 5, 3, 8
function y(num1, num2) {
    console.log(num1);
    return num1 + num2;
}
console.log(y(2, 3))
console.log(y(3, 5))
// Código 6, salida predecida: 15, 10, 10
a = 15;
console.log(a);
function y(a) {
    console.log(a);
    return a;
}
b = y(10);
console.log(b);
// Código 7, salida esperada: 15, 10, 20
a = 15;
console.log(a);
function y(a) {
    console.log(a);
    return a * 2;
}
b = y(10);
console.log(b);