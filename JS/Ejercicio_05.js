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

  let anioNacimiento= 2005;
  let asignGeneration = (anioNacimiento)=>{
  
  switch (true){
    case (anioNacimiento<1968): 
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
console.log(`Dado que nací en el año 2005 soy de la generación: ${asignGeneration(2005)}`)

console.log("%c4.- Manejo de Excepciones (TRY / CATCH) ",style_console);

// En algunas ocasuiones existiran errores que no son culpa del programa, si no del usuario, la red, el SO, o incluso de un middleware..., pero si duda debemos controlar para evitar las fallas de ejecucion
console.log("Lo intentamos dividir : 10/0, el resultado es:")
try{
    let result = 10/0;
    console.log(result)

}catch(error){
    console.log("Ocurrio un  error"+ error.message);
}

console.log("Lo intentamos dividir : 0/10, el resultado es:")
try{
    let result = 0/10;
    console.log(result)

}catch(error){
    console.log("Ocurrio un  error"+ error.message);
}

console.log("Lo intentamos dividir : a/10, el resultado es:")
try{
    let result = "a"/10;
    console.log(result)

}catch(error){
    console.log("Ocurrio un  error"+ error.message);
}

console.log("Lo intentamos dividir : a / 10, el resultado es:")
try{
    let result = a / 10; // Dividir una variable no definida entre 0
    console.log(result)

}catch(error){
    console.log("Ocurrio un  error"+ error.message);
}

console.log("Intentamos dividir: el valor de la variabole x / entre el valor de la variable y, el resultado es:")
try{
    let x=8, y= 2, result = x/y; // Dividir una variable definida
    console.log(result)

}catch(error){
    console.log("Ocurrio un  error"+ error.message);
}

console.log("%c5.- Control de Ciclos (BREAK/ CONTINUA) ",style_console);

// En algunas ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales de un ciclo

console.log("Vamos a contar del 1 al 10... ")

for(let num=1; num<=10; num++)
    console.log(num);

console.log("Ahora necesitamos que si llegas a 7 pares de contar... suponiendo que solo por hoy es de mala suerte... ")

for(let num=1; num<=10; num++)
    if(num == 7)
        break;
    else
console.log(num);

console.log("Ahora necesitamos que si llegas a 7 te saltes ese numero y continues ")

for(let num=1; num<=10; num++)
    if(num == 7)
        continue;
    else
console.log(num);

console.log("%c6.- Ciclo Iterativo - (FOR) ",style_console);

// Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana son: ")
let dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

for(let i=0; i<dias.length; i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendente... ")

const meses = ["Enero","Febrero", "Marzo", "Abril","Mayo","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for(let i=11; i>=0; i--)
    console.log(meses[i])

console.log("%c7.- Ciclo Condicionales - (WHILE) ",style_console);

// Estos ciclos (BUCLE) dependen de una condición para continuar ejecutandose

let finDeSemana = false;
let j=0;
let mensaje;


while(j<dias.length){
    switch(j){ //Usamos 'J' para que coincida con el índice
        case 0 : 
            finDeSemana= true;
            mensaje = 'Mormingooooooo.. ZzzzzzzzZZZZZzzz  (￣o￣) . z Z';
            break;
        case 1 : 
            finDeSemana= false;
            mensaje = "San Lunes a Chambiar... (┬┬﹏┬┬)"
            break;
        case 2 : 
            finDeSemana= false;
            mensaje = "Martirio.... (╯▔皿▔)╯"
            break;
        case 3 : 
            finDeSemana= false;
            mensaje = "Miercodi.... 0_o"
            break;
        case 4 : 
            finDeSemana= false;
            mensaje = "Jueveves de funa (/≧▽≦)/"
            break;
        case 5 : 
            finDeSemana= false;
            mensaje = "Viernesito de Sueñito ＼(((￣(￣(￣▽￣)￣)￣)))／"
            break;
        case 6 : 
            finDeSemana= true;
            mensaje = "Sabado de quehacer -_-, "
            break;
    }   
    
    // Imprimir el nombre del dia y su mensaje
    if(!finDeSemana){
        console.log(`Día ${j} ${dias[j]}`);
        console.log(`Mensaje del dia ${mensaje}`);
    }
    j++
}

console.log("%c8.- Ciclo Condicionales, que se ejecuta al menos una vez - (DO WHILE) ",style_console);

// Simulamps una lista de episodios de una temporada

let episodios = [
    "Episodio 1: El comienzo",
    "Episodio 2: La revelación",
    "Episodio 3: La confrontación",
    "Episodio 4: El desenlace",
    "Episodio 5: El final inesperado"
];

let indice = 0;
let continuarViendo = true; // Esta variable simula la decision del usuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`)

    // simulamos la reproducción del episodio
    indice++;
    if(indice<episodios.length){
        continuarViendo = confirm("¿Deseas continuar con el siguiente episodio?");
    }else{
        continuarViendo = false; // Cunado se acaba la lista de episodios
    }
}while(continuarViendo && indice < episodios.length);

console.log("Fin de la reproducción");

// Ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos

console.log("%c9.- Ciclo para recorrer elementos finitos - (FOR ... OF) ",style_console);

let seriesTrending = [
    {nombre: "The Whitcher", temporadas: 3, totalViewers: "1.5M", totalReprods: "3.0M"},
    {nombre: "Stranger Thing", temporadas: 4, totalViewers: "6.5M", totalReprods: "10M"},
    {nombre: "The Boys", temporadas: 3, totalViewers: "3.2M"},
    {nombre: "Loki", temporadas: 2, totalReprods: "250K"},
    {nombre: "Succession", temporadas: 4}
]

// Usando for ... of para recorrer la lista
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try{
    console.log(`La ultima serie leida fué: ${serie.nombre}`);
    // No va a funcionar por la varie serie ya que no existe ya que su alcanxce solo estuvo surante el ciclo
}catch(error){
    console.log("Mensaje de error: "+error.message)
}

console.log("%c10.- Ciclo para recorrer las propiedades de elementos finitos - (FOR ... IN) ",style_console);

// Usando for... in para recorrer cada serie

for(let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+1}`)
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log('------------------------------');  
}


console.log("%c11.- Ciclos interrumpidos para cada uno de los elementos del arreglos - (FOR ... EACH) ",style_console);

let seriesTrending2 = [
    {nombre: "The Whitcher", temporadas: 3, viewers: 80000000, reproducciones:250000000},
    {nombre: "Stranger Thing", temporadas: 4,viewers: 120000000, reproducciones:400000000},
    {nombre: "The Boys", temporadas: 3,viewers: 70000000, reproducciones:220000000},
    {nombre: "Loki", temporadas: 2, viewers: 90000000, reproducciones:300000000},
    {nombre: "Succession", temporadas: 4, viewers: 60000000, reproducciones:180000000},
    {nombre: "The Walking Dead", temporadas: 16, viewers: 160000000, reproducciones:360000000}
]

// Usando forEach para recorrer cada serie y calcular la calificación
seriesTrending2.forEach((serie, index) => {
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2); // Calcula la calificación y la redondea a 2 
    console.log(`Serie ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporadas: ${serie.temporadas}`);
    console.log(`Viewers: ${serie.viewers}`);
    console.log(`Reproducciones: ${serie.reproducciones}`);
    console.log(`Calificación ${calificacion}`);
    console.log(`------------------------------------`);
});

 
//  Usandoo Filter para filtrar , y MAP para transformar la información
// Lista de series que queremos verificar
let seriesDeseadas = ["The Walking Dead", "The Boys","Loki"]

// Usanbdo map e includes para filtrar y obtener los nombres de series con tres temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie=> serie.temporadas <= 3) // Filtramos las seroies que tienen 3 temporadas
.map(serie=> serie.nombre) // Obtenemos solo los nomkbres de estas series
.filter(nombre=> seriesDeseadas.includes(nombre)); // Filtramos las que estan en la lista de series deseadas

// Mostra los resultados
console.log("Series con 3 temporadas que estan en la lista deseada:");
console.log(seriesConTresTemporadas);