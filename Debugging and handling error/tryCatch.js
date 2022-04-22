/* O objetivo é que a função de aumentar o seu tamanho corresponde ao número 
enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não foram enviados, lance um erro do tipo enviadoReferenceError
Se o array não for do tipo 'object', lance um erro do tipoTypeError
Se o número não for do tipo 'number', lance um erro do tipoTypeError
Se o tamanho do array for diferente do número enviado como parâmetro, 
lance um erro do tipoRangeError
Utilize uma declaraçãotry...catch
Filtre como chamadas de captura por cada tipo de erro usando
 o operadorinstanceof */

function arrayValida(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Insira um array e um número");

    if (typeof arr !== "object")
      throw new TypeError("O array precisa ser do tipo object");

    if (typeof num !== "number") throw new TypeError("O número precisa ser do tipo Number");

    if (arr.length !== num) throw new RangeError("O tamanho do array precisa ser igual ao número indicado");

    return arr;
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é  ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é TypeError");
      console.log(e.message);
      console.log(e.stack);
    } else if (e instanceof RangeError) {
      console.log("Este erro é RangeError");
      console.log(e.message);
      console.log(e.name);
    } else {
      console.log("Tipo de erro não esperado: " + e);
    }
  }
}
let nome = 'Marcos'
let myarr = [1, 5, 2, 8, 7, 9]


arrayValida(myarr, 1)