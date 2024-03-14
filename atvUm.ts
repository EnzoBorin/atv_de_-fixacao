console.clear();
const  = require (`prompt-sync`)();

const pi: number = 3.14159;
let raio: number = parseFloat(teclado(`Digite o raio`));
let altura: number = parseFloat(teclado(`Digite a altura`));

let volumeLata: number = (pi * (raio * raio) * altura);
console.log(`O volume da lata é ${volumeLata}`);