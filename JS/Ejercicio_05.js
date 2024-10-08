// Estilización de los mensajes de salida

const bg= "linear-gradient(45deg, rgba(75, 0, 130, 1) 0%, rgba(138, 43, 226, 1) 50%, rgba(230, 230, 250, 1) 100%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`


// Personalizacióin de salidas a Consola

console.warn("Práctica 07: Arreglos en JavaScript")

console.log("%c1.- Si/Entonces... (IF) ",style_console);
// Le dice al programa que hacer o que ni en base a una porueba lótgica de verdadero o falso

 let fechaActual= new Date()

// let fechaActual = new Date(2024,1,6);

// let fechaActual = new Date(2025,4,30);

//let fechaActual = new Date("2025/06/07");

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

const anio = fechaActual.getFullYear();

let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);

let horarioVerano = false; 

if(fechaActual >= inicioPrimavera && fechaActual < inicioVerano){
        console.log("Estamos en PRIMAVERA...")
        console.log("Inicia la Floración...")
        console.log("Los dias son mas largos y las noches mas cortas...")
        console.log("Muchos animales despiertan de la hibernación...")
        estacion= "Primavera"
        horarioVerano = true;     

} else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio){
    console.log("Estamos en VERANO...")
        console.log("En esta temporada los dias abundan los días Soleados y Calurosos...")
        console.log("En esta tem,porada el indice de turismo vacaional sube...")
        console.log("Mucha gente busca realizar actividades al aire...")
        estacion= "Verano"
        horarioVerano = true;     

}else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno){
    console.log("Estamos en OTOÑO...")
        console.log("Los arboles suelen cambiar de follaje")
        console.log("Se registran temperaturas mas templadas")
        console.log("Los animales comienzan la recoleccion de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran4")
        estacion= "Otonio"
        horarioVerano = true;     

} else {
    console.log("Estamos en INVIERNO...")
        console.log("En esta temporada los dias son mas cortos y las noches mas largas...")
        console.log("En algunas regiones suele navegar...")
        console.log("Dado las bajas temperaturas, se recomienda abrigarse")
        estacion= "Invierno"
        horarioVerano = false;     
  }


  console.log("%c2.- Operador Ternario (Validación? Cumple: No cumple) ",style_console);
  // En JavaScript existe una operación simplificada que valida si una condición cumple o no, y que hacer en cada caso
  
  const edadPersona = 18;
  const mayoriaEdadMX = 18;
  const mayoriaEdadUS = 21;
  let evaluarMayoriaEdad = (edad) => edad>=18 ? "Eres mayor de edad. " : "No eres mayor de edad. "
  console.log("Evaluando la mayoria de edad de una persona...")
  console.log(evaluarMayoriaEdad(edadPersona));
  
  // Sin embargo si9 tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro de la evaluación
  
  evaluarMayoriaEdad = (edad,pais) => edad>=18 && pais==="MX" ? `En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;
  
  console.log("Evaluando la mayoria de edad de una persona en México...")
  console.log(evaluarMayoriaEdad(edadPersona, "MX"));
  
  console.log("Evaluando la mayoria de edad de una persona en US...")
  console.log(evaluarMayoriaEdad(edadPersona, "US"));
  
  
  console.log("%c3.- SWITCH - CASE (Elección por valor definido) ",style_console);

  // Calculando tu generación en base a tu edad

  let anioNacimiento= 2003;
  let asignGeneration = (anioNacimiento)=>{
  
  switch (true){
    case (anioNacimiento>1968): 
    return "Baby Boomers";

    case (anioNacimiento>1968 && anioNacimiento<=1980): 
    return "Generación X";

    case (anioNacimiento>1981 && anioNacimiento<=1993): 
    return "Millenials";

    case (anioNacimiento>1994 && anioNacimiento<=2010): 
    return "Generación Z";
  
    case (anioNacimiento>2010 ): 
    return "Cristalitos";
}
}
console.log(`Dado que nació en el año 2005 soy de la generación: ${asignGeneration(2005)}`)