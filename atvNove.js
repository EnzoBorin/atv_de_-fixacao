console.clear();
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("sua idade?: "));
var peso = parseFloat(teclado("sua idade?: "));
if (idade >= 18 && idade) {
    if (peso >= 60) {
        console.log("Voc\u00EA pode doar sangue");
    }
    else {
        console.log("Seu peso \u00E9 insuficiente para doar sangue");
    }
}
else if (idade < 18 && peso < 60) {
    console.log("Seu pre\u00E7o e sua idade s\u00E3o insuficientes para doar sangue");
}
else {
    console.log("Voc\u00EA n\u00E3o tem idade suficiente para doar sangue");
}
