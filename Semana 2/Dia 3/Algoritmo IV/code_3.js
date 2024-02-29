// 3. Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
function reemplazarNegativos(array) {
    for (var i = 0; i < array.length; i++){
        if (array[i] < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}
console.log(reemplazarNegativos([1, 2, -3, -5, 5]));