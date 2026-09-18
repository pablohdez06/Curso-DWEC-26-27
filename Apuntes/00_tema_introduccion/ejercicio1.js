/*//Ejercicio 1 de JavaScript
console.log("Hola mundo");
//tipos de datos en JavaScript
//
//String 
//'' "" ``
//var let const 
//
let nombre = "Pablo"
let apellidos = "HS"
let aniosTrabajo = 0
console.log(`Hola s tod@s, me llamo ${nombre} ${apellidos} y llevo trabajando ${aniosTrabajo} años`);
//console.log(typeoff(String(aniosTrabajo)));
//console.log(typeoff(Number(apellidos)));

//validaciones básicas == ===
//
//== <-- significa si el valor de la izquierda es igual al valor de la derecha
//=== <-- siginifca si el valor y tipo de la izquierda conincide con el valor y tipo de la derecha
//'5' == 5 // <-- true
//'5' === 5 // <--- false
//
//ternarias evaluación_expresión ? verdadero : falso
const edad = "23"
edad > 17 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");*/ 

/*dada la edad, los minutos y los segundos. comprobar 1º si la edad es un número positivo y mayor 
 * q 18 extrictamente y 2º comprobar si la hora y 
 * los minutos son valores válidos dentro de nuestro sistema de numeración*/

const edad = 20;
const minutos = 17;
const segundos = 32;

edad > 17 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");
minutos > 60 ? console.log("Correcto") : console.log("Incorrecto");


