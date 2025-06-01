//Euriel Bertel Correa
//Paso 1: Definición de la función

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: División por cero";
        }
    } else {
        return "Operación no válida";
    }
}

//Paso 2: Solicitar datos al usuario
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese el primer número: ", (input1) => {
    const numero1 = parseFloat(input1);
    readline.question("Ingrese el segundo número: ", (input2) => {
        const numero2 = parseFloat(input2);
        console.log("Operaciones disponibles: suma, resta, multiplicacion, division");
        readline.question("Ingrese la operación a realizar: ", (operacion) => {
            const resultado = realizarOperacion(numero1, numero2, operacion.toLowerCase());
            console.log("")
            console.log("Resultado de la" ,operacion , "es:", resultado);
            readline.close();
        });
    });
});