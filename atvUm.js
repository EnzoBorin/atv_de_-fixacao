console.clear();
var require;
("prompt-sync")();
var pi = 3.14159;
var raio = parseFloat(teclado("Digite o raio"));
var altura = parseFloat(teclado("Digite a altura"));
var volumeLata = (pi * (raio * raio) * altura);
console.log("O volume da lata \u00E9 ".concat(volumeLata));
