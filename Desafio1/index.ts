
// Cambiar a typescript
var nombre;
nombre = "Miguelo";
var edad;
edad = 30;

//-----------------------------
const nombre: string = "Migueli";
let edad: number = 30;




//cambiar a una clase
var PERSONAJE = {
    nombre: nombre,
    edad: edad
}

//--------------------

class Personaje{
    nombre: string;
    edad: number;

    constructor(string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const personaje = new Personaje("Jeremias", 18);



// Cambiar a una interface
var spiderman = {
    nombre: "Peter Parker",
    poderes: ["trepar", "Fuerza", "agilidad","telas de araña"]
};

//-------------------
interface Spiderman{
    nombre: string;
    poderes: string[];
    edad: number;

    constructor(nombre: string, edad: number, poderes: Array<string>){
        this.nombre = nombre;
        this.edad = edad;
        this.poderes = poderes;
    }    

}    

const personaje: Personaje = new personaje("Peter Parker", 18, ["trepar","fuerza", "agilidad", "telas de araña"]);

console.log(personaje);

// al final se llama a la consola, utilizando el juejo de 3 de los ejercicios.
//$ tsc index.ts
//$ npm start