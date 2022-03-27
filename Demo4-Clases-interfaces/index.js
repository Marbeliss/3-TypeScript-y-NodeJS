{
    return "hola";
}
var objeto1 = new Camada("Angular", "Abner", "27310");
console.log(objeto1);
/*let c: Curso = {
    nombre: "Angular",
    profesor: "Abner",
    tutores:
    
};
*/
var Camada = /** @class */ (function () {
    function Camada(nombre, profesor, nombrecamada, tutores) {
        if (nombrecamada === void 0) { nombrecamada = string; }
        this.nombre = nombre;
        this.profesor = profesor;
        this.tutores = tutores;
        this.nombreCamada = nombreCamada;
    }
    Camada.prototype.saludar = function () {
        return "Hola";
    };
    return Camada;
}());
console.log(c);
