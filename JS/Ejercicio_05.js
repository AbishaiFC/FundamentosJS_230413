// Estilización de los mensajes de salida

const bg= "linear-gradient(45deg, rgba(75, 0, 130, 1) 0%, rgba(138, 43, 226, 1) 50%, rgba(230, 230, 250, 1) 100%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`


// Personalizacióin de salidas a Consola

console.warn("Práctica 07: Arreglos en JavaScript")

console.log("%c1.- Si/Entonces... (IF) ",style_console);
// Le dice al programa que hacer o que ni en base a una porueba lótgica de verdadero o falso

let fechaActual= new Date()
console.log(`Hola la fecha de hoy es: ${fechaActual.toString()}`)

// ¿Y si la necesitamos en formato local?

const fechaLocalMX = fechaActual.toLocaleString('es-MX', {
    weekday:'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
})

console.log(`En formato local (México): ${fechaLocalMX}`);

// Si es amntes de las 12 saluda con Buenos días

if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es ${fechaLocalMX}`)

// Exisarw un extensor de la sensntencia if(Si) que es else(En caso contrario

if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);

// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear
let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);

let horarioVerano = false; 

if(fechaActual >= inicioPrimavera || fechaActual < inicioVerano){
        console.log("Estamos en PRIMAVERA...")
        console.log("Estamos en PRIMAVERA...")

}