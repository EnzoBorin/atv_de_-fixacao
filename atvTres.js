console.log();
var teclado = require("prompt-sync")();
var vogalA = "a";
var vogalE = "e";
var vogalI = "i";
var vogalO = "o";
var vogalU = "u";
var letra = teclado("Digite uma letra: ");
if (letra == vogalA || vogalE || vogalI || vogalO || vogalU) {
    console.log("a letra ".concat(letra, " \u00E9 vogal"));
}
else {
    console.log("a letra ".concat(letra, " \u00E9 consoante"));
}
