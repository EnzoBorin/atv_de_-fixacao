console.clear();
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite um numero para x: "));
var y = parseFloat(teclado("Digite um numero para y: "));
var amarzenamentoX = x;
var amarzenamentoY = y;
console.log("x \u00E9 igual a ".concat(x, " e y \u00E9 igual a ").concat(y));
console.log("PAM!! x \u00E9 igual a ".concat(amarzenamentoY, " e y igual a ").concat(amarzenamentoX));
