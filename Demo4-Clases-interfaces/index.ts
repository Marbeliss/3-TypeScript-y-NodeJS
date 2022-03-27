interface Curso {
    nombre: string;
    profesor: string;
    tutores?: Array<string>;

    saludar(): string{
        return "hola";
    }
}

let objeto1: Camada = new Camada("Angular","Abner", "27310");
console.log(objeto1);

/*let c: Curso = {
    nombre: "Angular",
    profesor: "Abner",
    tutores: 
    
};
*/
class Camada implements Curso {
    nombre: string;
    profesor: string;
    tutores: string[] | undefined;
    nombreCamada: string;

    constructor(nombre: string, profesor: string, nombrecamada = string, tutores?: string []){
        this.nombre = nombre;
        this.profesor = profesor;
        this.tutores = tutores;
        this.nombreCamada = nombreCamada;
    }

    saludar(): string{
        return "Hola";
    }

}
console.log(c);

