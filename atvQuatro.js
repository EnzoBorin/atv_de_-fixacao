console.log();
var teclado = require("prompt-sync");
var numero1 = parseFloat(teclado("Digite o primeiro numero: "));
var numero2 = parseFloat(teclado("Digite o segundo numero: "));
var numero3 = parseFloat(teclado("Digite o terceiro numero: "));
if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= numero3) {
        console.log("Numero em ordem crescente: ".concat(numero1, ";").concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
    else {
        console.log("Numero em ordem crescente: ".concat(numero1, ";").concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
}
else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        console.log("Numero em ordem crescente: ".concat(numero1, ";").concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
    else {
        console.log("Numero em ordem crescente: ".concat(numero1, ";").concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
}
else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        console.log("Numero em ordem crescente: ".concat(numero1, ";").concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
    else {
        console.log("Numero em ordem crescente: ".concat(numero1, ";").concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
}
