// Ya sea en el mismo archivo o en uno diferente, crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array. Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas.
function sumMaxMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return (max + min);
}
describe("sumMaxMin", function () {
  it("deberia devolver 11 cuando pasamos [1,3,10] como argumento", function () {
    expect(sumMaxMin([1, 3, 10])).toEqual(11);
  });
  it("deberia devolver -12 cuando pasamos [-2,-5,-10] como argumento", function () {
    expect(sumMaxMin([-2, -5, -10])).toEqual(-12);
  });
})