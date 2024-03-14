console.clear();
var teclado = require("promot-sync")();
var pergunta1 = parseFloat(teclado("Voc\u00EA telefonou para a v\u00EDtima? (digite 1 para sim e 0 para n\u00E3o): "));
var pergunta2 = parseFloat(teclado("Esteve no local do crime? (digite 1 para sim e 0 para n\u00E3o): "));
var pergunta3 = parseFloat(teclado("Mora perto da v\u00EDtima? (digite 1 para sim e 0 para n\u00E3o): "));
var pergunta4 = parseFloat(teclado("Devia para a v\u00EDtima? (digite 1 para sim e 0 para n\u00E3o): "));
var pergunta5 = parseFloat(teclado("J\u00E1 trbalhou com a v\u00EDtima? (digite 1 para sim e 0 para n\u00E3o):"));
var interrogatorio = 0;
if (pergunta1 == 1) {
    interrogatorio++;
}
if (pergunta2 == 1) {
    interrogatorio++;
}
if (pergunta3 == 1) {
    interrogatorio++;
}
if (pergunta4 == 1) {
    interrogatorio++;
}
if (pergunta5 == 1) {
    interrogatorio++;
}
if (interrogatorio == 2) {
    console.log("Suspeito");
}
if (interrogatorio == 3 || interrogatorio == 4) {
    console.log("Assassino");
}
if (interrogatorio == 5) {
    console.log("Assassino");
}
if (interrogatorio == 0) {
    console.log("Inocente");
}
