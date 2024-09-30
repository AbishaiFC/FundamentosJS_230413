// Repaso de Arreglos 

// Estilización de los mensajes de salida

const bg= "linear-gradient(11deg, rgba(199,0,36,1)0%, rgba(199,0,36,1)33%, rgba(255,191,26,1)86%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

// Personalización de las Salidas a Consola
console.warn("Practica 06: Arreglos en JavaScript");

// DFe claración de un Arreglo
// Para declarar un arreglo (Array)  de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arreglo

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", ]

console.log("%c1.- Declaración de un Arreglo (Array) ", style_console);
console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un Arreglo de datos para acceder al valor solo basrta env8iar la pocisión del dqato qyue queremos dentro de los limites seleccionados, siendo el limite inferior 0 y el limite superior tamaño -1

console.log("%c2.- Leer o recuperar los datos de un Arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]} `) 
console.log(`El ultimo mes del año es: ${mesesAnio[mesesAnio.length-1]} `) 

// No se pueden acceder a los elementos con pocisiones neggativas o pocisiones superiores al tamaño definido.

console.log(`El mes del año en la pocision -1 es ${mesesAnio[-1]}`)
console.log(`El treceavo mes del año en la pocision -1 es ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)


// Al ser Javascript un lenguaje debilmente tipado podemos crear Arreglos mixtos de tipos de Datos
const saludar = function(nombre){return `Hola, ${nombre}`}

let arregloMixto = ["String", 5, 45,26, -200, -.16854, Symbol("MARH"), 'z', false, BigInt(111112222233333444455555666667777), true, {latitud: "20° 18' 0\" N" , longitud: "97° 58' 0\" W" , altitud: 796}, saludar,null ]

// Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la pocision [0] = ${arregloMixto[0]} y es del tipo ${typeof(arregloMixto[0])}`)
console.log(`El dato en la pocision [1] = ${arregloMixto[1]} y es del tipo ${typeof(arregloMixto[1])}`)
console.log(`El dato en la pocision [2] = ${arregloMixto[2]} y es del tipo ${typeof(arregloMixto[2])}`)
console.log(`El dato en la pocision [3] = ${arregloMixto[3]} y es del tipo ${typeof(arregloMixto[3])}`)
console.log(`El dato en la pocision [4] = ${arregloMixto[4]} y es del tipo ${typeof(arregloMixto[4])}`)
console.log(`El dato en la pocision [5] = ${arregloMixto[5]} y es del tipo ${typeof(arregloMixto[5])}`)
console.log(`El dato en la pocision [6] = ${arregloMixto[6].toString} y es del tipo ${typeof(arregloMixto[6])}`)
console.log(`El dato en la pocision [7] = ${arregloMixto[7]} y es del tipo ${typeof(arregloMixto[7])}`)
console.log(`El dato en la pocision [8] = ${arregloMixto[8]} y es del tipo ${typeof(arregloMixto[8])}`)
console.log(`El dato en la pocision [9] = ${arregloMixto[9]} y es del tipo ${typeof(arregloMixto[9])}`)
console.log(`El dato en la pocision [10] = ${arregloMixto[10]} y es del tipo ${typeof(arregloMixto[10])}`)
console.log(`El dato en la pocision [11] = ${arregloMixto[11]} y es del tipo ${typeof(arregloMixto[11])}`)
console.log(`El dato en la pocision [12] = ${arregloMixto[12]} y es del tipo ${typeof(arregloMixto[12])}`)
console.log(`El dato en la pocision [13] = ${arregloMixto[13]} y es del tipo ${typeof(arregloMixto[13])}`)
console.log(`El dato en la pocision [14] = ${arregloMixto[14]} y es del tipo ${typeof(arregloMixto[14])}`)

console.log("%c3.- Arreglos Multdimensionales (Matrices)", style_console);

console.log("Declarando una matriz regular:")
// Una matriz es una estructura de datos multidimensional (tabla)
let matriz = [[1,2,3,4,],['a','b','c','d']]

// Esta es una matriz regular de 4 x 4

console.log(matriz)
console.table(matriz)

// Accediendo a los valores de la matriz regular

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elementos en la pocision [0][0]: ${matriz[0][0]}`)
console.log(`Elementos en la pocision [0][1]: ${matriz[0][1]}`)
console.log(`Elementos en la pocision [0][2]: ${matriz[0][2]}`)
console.log(`Elementos en la pocision [0][3]: ${matriz[0][3]}`)
console.log(`Elementos en la pocision [1][0]: ${matriz[1][0]}`)
console.log(`Elementos en la pocision [1][1]: ${matriz[1][1]}`)
console.log(`Elementos en la pocision [1][2]: ${matriz[1][2]}`)
console.log(`Elementos en la pocision [1][3]: ${matriz[1][3]}`)


console.log("Declarando una matriz irregular:")

const matrizIrregular = [["Juan","Pedro"," Maria", "Inés"], [true, true, false, null], [9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)


// Accediendo a los valores de la matriz regular

console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elementos en la pocision [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elementos en la pocision [0][1]: ${matrizIrregular[0][1]}`)
console.log(`Elementos en la pocision [0][2]: ${matrizIrregular[0][2]}`)
console.log(`Elementos en la pocision [0][3]: ${matrizIrregular[0][3]}`)
console.log(`Elementos en la pocision [1][0]: ${matrizIrregular[1][0]}`)
console.log(`Elementos en la pocision [1][1]: ${matrizIrregular[1][1]}`)
console.log(`Elementos en la pocision [1][2]: ${matrizIrregular[1][2]}`)
console.log(`Elementos en la pocision [1][3]: ${matrizIrregular[1][3]}`)
console.log(`Elementos en la pocision [1][3]: ${matrizIrregular[2][0]}`)


// Funciones y Métodos de Arreglos 
// Los métodos de un objeto generalmente siempre son invocados usando un . y al término se delimitan los parametros entre (), en caso de que no lleve () no es un metodo si no una propiedad

console.log("%c4.- Funciones o Métodos de Arreglos (Arrey Methods or Array Functions)", style_console);

console.log("¿Cómo saber cual es el tamaño de un Arreglo?")
console.log(`Meses es un Arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un Arreglo de tamaño: ${arregloMixto.length}`)

console.log(`¿Qué pasa con los multidimensionales?`)
console.log(`matriz es un Arreglo de tamaño: ${matriz.length}`)
console.log(`matrizIrregular es un Arreglo de tamaño: ${matrizIrregular.length}`)
console.log("mmmm, eso me da el tamaño de número de filas, de la matriz, pero como saber el número de columnas? ");

console.log(`La Matriz Regular tien un número de: ${matriz[0].length}`)
console.log("¿Y para las irregulares?")
// Para saber la dimensión de una matriz irrefuylar podemos hacer el uso de un ciclo

let numeroFilas = matrizIrregular.length
for (let i=0; i<numeroFilas; i++) {
    console.log(`La longitud de la fila ${i} es = ${matrizIrregular[i].length}`)
}
