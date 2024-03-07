// Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function cambiaHaciaElCentro(array) {
  console.log(array);
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  [array[2], array[array.length - 3]] = [array[array.length - 3], array[2]];
  console.log(array);
}
cambiaHaciaElCentro([true, 42, 'Ada', 2, 'pizza']);
cambiaHaciaElCentro([1, 2, 3, 4, 5, 6]);

//No entendí el enunciado si es que quiere sólo en esas posiciones que menciona ahí (como lo hice), o si es un intercambio en índices intercalados.