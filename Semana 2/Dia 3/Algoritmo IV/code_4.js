// Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
function removerRango(array, firstIndex, lastIndex) {
    var numbersToRemove = lastIndex - firstIndex;
    array.splice(firstIndex, numbersToRemove + 1);
    return array;
}
console.log(removerRango([20, 30, 40, 50, 60, 70], 2, 4));