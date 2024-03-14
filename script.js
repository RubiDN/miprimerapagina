//alert("Hola este es mi javascript");

let nombre = "Rubi";
nombre= "Talia"
var nombre1 ="Rubi";
const nombre2 = "Rubi";
//nombre2="Kiara";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);


let contenidoTitulo= "Holi";
let titulo = document.querySelector(".logo .fuente-acento");
console.log(titulo);
titulo.innerHTML= contenidoTitulo;

//CONDICIONALES

let textoTitulo =titulo.innerText;
console.log(textoTitulo);

if(textoTitulo=="Holi"){
    titulo.innerHTML="Otro";
} else {
    console.log ("no se cumple")
}