// Cambiar a typescript
var nombre;
nombre = "Miguelo";
var edad;
edad = 30;
//-----------------------------
var nombre = "Migueli";
var edad = 30;
//cambiar a una clase
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
//--------------------
var Personaje = /** @class */ (function () {
    function Personaje(string, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Personaje;
}());
var personaje = new Personaje("Jeremias", 18);
// Cambiar a una interface
var spiderman = {
    nombre: "Peter Parker",
    poderes: ["trepar", "Fuerza", "agilidad", "telas de araña"]
};
{
    this.nombre = nombre;
    this.edad = edad;
    this.poderes = poderes;
}
var personaje = new personaje("Peter Parker", 18, ["trepar", "fuerza", "agilidad", "telas de araña"]);
console.log(personaje);
