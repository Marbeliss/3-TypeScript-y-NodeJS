/*let mensaje = "hola";

console.log(mensaje);
*/
//ejemplo de como utilizar distintas variables.
var numero = 1;
var booleano = true || false;
var cadena = "Hola";
var arreglo1 = [1, 2, 3, 4, 5];
var arreglo2 = [10, 11, 12, 13];
var tupla = [1, "Abnet Garcia"];
var catalogo;
(function (catalogo) {
    catalogo[catalogo["Si"] = 0] = "Si";
    catalogo[catalogo["No"] = 1] = "No";
})(catalogo || (catalogo = {}));
console.log(catalogo.Si, catalogo.No);
