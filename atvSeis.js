console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite a primeira nota"));
var n2 = parseFloat(teclado("Digite a segunda nota"));
var media = (n1 + n2) / 2;
if (media >= 8.5 && media == 10) {
    console.log("Nota \u00E9 A e media \u00E9 igual a ".concat(media));
}
if (media >= 7 && media < 8.5) {
    console.log("nota \u00E9 C e media \u00E9 igual a ".concat(media));
}
if (media >= 5 && media < 7) {
    console.log("Nota \u00E9 C e media \u00E9 igual a ".concat(media));
}
if (media < 3) {
    console.log("Nota \u00E9 D e media \u00E9 igual a ".concat(media));
}
else if (media < 0 && media > 10) {
    console.log("Erro");
}
