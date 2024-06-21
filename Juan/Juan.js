//Declaración de Variables


//Ejercicio 1: Declaración y Asignación
//1. Declara una variable para almacenar tu ciudad natal y asígnale el nombre de la ciudad.
//2. Declara una variable para almacenar tu color favorito y asígnale el color.
//3. Declara una variable para almacenar tu número de teléfono, usando un string para permitir guiones.

const myCity = "Montevideo";
const myColor = "Azul";
const myPhone = "111-111-1111";
const myInfo = [myCity, myColor, myPhone].join("-");


console.log(myInfo);



// Ejercicio 2: Actualización de Variables
// 1. Declara una variable score y asígnale el valor 0.
// 2. Actualiza el valor de score sumando 10 puntos.
// 3. Vuelve a actualizar el valor de score restando 5 puntos. 
// 4. Muestra el valor final de score.



let score = 0;
score += 10;
score -= 5;


console.log(score); // Imprime (5)


// Ejercicio 3: Variables Constantes
// 1. Declara una constante PI y asígnale el valor 3.14159.
// 2. Declara una constante BIRTH_YEAR y asígnale tu año de
// nacimiento.
// 3. Intenta reasignar un nuevo valor a PI y observa el
//      resultado (debería generar un error).

const PI = `3.14159`;
const BIRTH_YEAR = 2000;
// const PI = `3.14159`; // MUESTRA ERROR YA QUE LAS CONSTANTES NO SE PUEDEN VOLVER A ASIGNAR.




// Tipos de Datos
// Ejercicio 1: Tipos Básicos
// 1. Declara una variable isJavaScriptFun y asígnale el valor true.
// 2. Declara una variable firstName y asígnale tu primer nombre.
// 3. Declara una variable numberOfSiblings y asígnale el número de hermanos que tienes.
// 4. Declara una variable height y asígnale tu altura en metros (por ejemplo, 1.75).

let isJavaScriptFun = true;
let firstName = "Juan";
let numberOfSiblings = 1;
let height = 1.75;







// Ejercicio 2: Conversión de Tipos
// 1. Declara una variable yearString y asígnale el año actual como string.
// 2. Convierte yearString a un número y almacénalo en una nueva variable yearNumber.
// 3. Declara una variable age y asígnale el valor 30.
// 4. Convierte age a un string y almacénalo en una nueva
// variable ageString.









// Ejercicio 3: Valores Especiales
// 1. Declara una variable undefinedVariable y no le asignes ningún valor.
// 2. Declara una variable nullVariable y asígnale el valor null.
// 3. Declara una variable notANumber y asígnale el resultado de
// una operación matemática inválida (por ejemplo, 0/0).
// Operadores
// Ejercicio 1: Operadores Aritméticos
// 1. Declara dos variables a y b y asígnales los valores 10 y 20 respectivamente.
// 2. Calcula y muestra el resultado de a + b.
// 3. Calcula y muestra el resultado de a - b.
// 4. Calcula y muestra el resultado de a * b.
// 5. Calcula y muestra el resultado de a / b.
// Ejercicio 2: Operadores de Comparación
// 1. Declara dos variables num1 y num2 y asígnales los valores 5 y 10 respectivamente.
// 2. Usa los operadores de comparación para verificar y mostrar si num1 es mayor que num2.
// 3. Usa los operadores de comparación para verificar y mostrar si num1 es igual a num2.
// 4. Usa los operadores de comparación para verificar y mostrar si num1 es diferente de num2.
// Ejercicio 4: Operadores Lógicos

// 1. Declara tres variables booleanas isAdult, hasDrivingLicense, y isStudent y asígnales los valores true, false,
// y true respectivamente.
// 2. Usa los operadores lógicos && y || para combinar estas variables y mostrar los resultados de las siguientes condiciones:
// o isAdult && hasDrivingLicense o isAdult || hasDrivingLicense o isStudent && isAdult
// o !isStudent
// Condicionales






// Ejercicio 1: Condicionales Simples
// 1. Declara una variable temperature y asígnale un valor numérico que represente la temperatura en grados Celsius.
// 2. Escribe un condicional que muestre "Hace frío" si la temperatura es menor que 15.
// 3. Escribe un condicional que muestre "Hace calor" si la temperatura es mayor que 25.


const temperature = 25;
if (temperature <= 15) {
     console.log("Esta haciendo frío")
}else if (temperature >= 25) {
          console.log("Esta haciendo calor, prende el ventilador")
} else { 
     console.log("La temperatura es templada") }
     





console.log( "actualmente hay " + temperature + " grados ");



function validarEdad () {
     let edad = 0;
     if (edad >= 18) {
          console.log("Puedes votar")
     } else {
          console.log("No puedes votar")
     }
}

validarEdad(12);

// Ejercicio 2: Condicionales Compuestos
// 1. Declara una variable hour y asígnale un valor numérico entre 0 y 23 que represente la hora del día.
// 2. Escribe un condicional que muestre "Buenos días" si la hora está entre 6 y 12.
// 3. Escribe un condicional que muestre "Buenas tardes" si la hora está entre 13 y 18.
// 4. Escribe un condicional que muestre "Buenas noches" si la hora está entre 19 y 5.

function validarHoras(hour) {
     if (hour !== Number || Number.NaN(hour))
     console.log("No es una hora valida")
     return
     {
     
     }


}


// Ejercicio 3: Condicionales Anidados
// 1. Declara una variable score y asígnale un valor numérico entre 0 y 100.
// 2. Escribe un condicional anidado que muestre la calificación correspondiente:
// o "A" si score es mayor o igual a 90. o "B" 90. o "C" 80. o "D" 70. o "F"
// si score es mayor o igual a 80 pero menor que si score es mayor o igual a 70 pero menor que si score es mayor o igual a 60 pero menor que si score es menor que 60.    







// Ejercicio: Calculadora de IMC (Índice de Masa Corporal)

// 1. Crea una funcione que calcule el IMC utilizando la fórmula proporcionada.
// 2. Utiliza condicionales para determinar en qué categoría de peso se encuentra la persona.
// 3. Imprime el IMC y la categoría de peso en la consola.

// • Bajo peso: IMC < 18.5
// • Peso normal: 18.5 <= IMC < 24.9
// • Sobrepeso: 25 <= IMC < 29.9
// • Obesidad: IMC >= 30


function calculoIMC(peso,altura) {
     const IMC = peso / (altura ** 2);

     if (typeof peso !== Number || Number.NaN(peso)){
          console.log("No es un peso valido")
          return
     }
     if (typeof altura !== Number || Number.NaN(altura)){
          console.log("No es una altura valida")
          return
     }
     if(IMC < 18.5){
          console.log("Bajo peso")
          return
     }
     if(IMC >= 18.5 && IMC < 24.9){
          console.log("Peso normal")
          return
     }
     else if(IMC >= 25 && IMC < 29.9){
          console.log("Sobrepeso")
          return
     }
     else if(IMC >= 30){
          console.log("Obesidad")
     
     }
}

calculoIMC (70, 1.65) // Imprime Peso normal



// CORRECCION DE JUAN 


function calculoIMC(peso,altura) {
     const IMC = (peso / (altura ** 2)).toFixed(2);
     if (typeof peso !== "number" || Number.isNaN(peso)){
          console.log("No es un peso valido")
          return
     }
     if (typeof altura !== "number" || Number.isNaN(altura)){
          console.log("No es una altura valida")
          return
     }
     if(peso, altura <=0){
          console.log("No es un peso o una altura valida.")
          return
     }
     if(IMC < 18.5){
          console.log("Tu IMC es " + IMC + " ,esta por debajo del peso indicado. ")
          return
     }
     else if(IMC >= 18.5 && IMC < 24.9){
          console.log("Tu IMC es " + IMC + ", tu peso es Normal.")
          return
     }
     else if(IMC >= 25 && IMC < 29.9){
          console.log("Tu IMC es " + IMC + ", tienes Sobrepeso.")
          return
     }
     else if(IMC >= 30){
          console.log("Tu IMC es " + IMC + ", tienes Obesidad.")
     }
}
calculoIMC (65, 1.65) // Imprime Peso normal

