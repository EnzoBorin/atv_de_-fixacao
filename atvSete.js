console.clear();
var teclado = require("prompt-sync")();
var numeroMaca = parseFloat(teclado("Quais ma\u00E7\u00E3s voc\u00EA quer: "));
var percoMaca = 0;
if (numeroMaca < 12) {
    percoMaca = 0.3;
}
else {
    percoMaca = 0.25;
}
var total = 0;
total = percoMaca * numeroMaca;
console.log("O valor das ma\u00E7\u00E3s s\u00E3o ".concat(total, " reais"));
