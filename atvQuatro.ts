console.log();
const teclado = require (`prompt-sync`);

let numero1:  number = parseFloat(teclado(`Digite o primeiro numero: `));
let numero2:  number = parseFloat(teclado(`Digite o segundo numero: `));
let numero3:  number = parseFloat(teclado(`Digite o terceiro numero: `));

if (numero1 <= numero2 && numero1 <= numero3) {
if (numero2 <= numero3) {
console.log(`Numero em ordem crescente: ${numero1};${numero1};${numero2};${numero3}`);
}
else{
console.log(`Numero em ordem crescente: ${numero1};${numero1};${numero2};${numero3}`)
}
} else if (numero2 <= numero1 && numero2 <= numero3) {
if (numero1 <= numero3) {
console.log(`Numero em ordem crescente: ${numero1};${numero1};${numero2};${numero3}`);
}
else{
console.log(`Numero em ordem crescente: ${numero1};${numero1};${numero2};${numero3}`);
}
} else if (numero2 <= numero1 && numero2 <= numero3) {
if (numero1 <= numero3) {
console.log(`Numero em ordem crescente: ${numero1};${numero1};${numero2};${numero3}`);
} else {
console.log(`Numero em ordem crescente: ${numero1};${numero1};${numero2};${numero3}`);
}
}
