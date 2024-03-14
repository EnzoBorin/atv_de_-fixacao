console.clear();
const teclad = require (`prompt-sync`)();

let x : number = parseFloat(teclado(`Digite um numero para x: `));
let y : number = parseFloat(teclado(`Digite um numero para y: `));
let amarzenamentoX : number = x;
let amarzenamentoY : number = y;


console.log(`x é igual a ${x} e y é igual a ${y}`);
console.log(`PAM!! x é igual a ${amarzenamentoY} e y igual a ${amarzenamentoX}`);