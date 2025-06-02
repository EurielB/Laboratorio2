//Euriel Bertel Correa
// Paso 1: Declaración de Variables
let num1 = 0;
let num2 = 0;
let operacion = "";

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
  if (operacion === "suma") {
    return num1 + num2;
  } else if (operacion === "resta") {
    return num1 - num2;
  } else if (operacion === "multiplicacion") {
    return num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      return "Error: División por cero.";
    }
    return num1 / num2;
  } else {
    return "Error: Operación no válida.";
  }
}

// Paso 4: Bucle para realizar múltiples operaciones
while (true) {
  // Solicitar datos al usuario
  operacion = prompt("Ingrese la operación: \n"+
    "1. suma\n" +
    "2. resta\n"+
    "3. multiplicacion\n"+
    "4. division\n"+
    "5. salir" + "para terminar:");

  // Paso 5: Validar si el usuario desea salir
  if (operacion === "salir") {
    alert("Gracias por usar la calculadora. ¡Hasta luego!");
    break;
  }

  // Validar operación
  if (
    operacion !== "suma" &&
    operacion !== "resta" &&
    operacion !== "multiplicacion" &&
    operacion !== "division"
  ) {
    alert("Operación no válida. Intente nuevamente.");
    continue;
  }

  // Pedir números al usuario
  num1 = parseFloat(prompt("Ingrese el primer número:"));
  num2 = parseFloat(prompt("Ingrese el segundo número:"));

  // Verificar si los datos son válidos
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese valores numéricos válidos.");
    continue;
  }

  // Realizar la operación y mostrar el resultado
  const resultado = realizarOperacion(num1, num2, operacion);
  alert("El resultado de la " + operacion + " es: " + resultado);
}