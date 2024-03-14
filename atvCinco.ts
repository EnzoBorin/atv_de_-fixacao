console.clear();
const teclado = require (`prompt-sync`)();

let numero1: number = parseFloat(teclado(`Digite o primeiro numero:`));
let numero1: number = parseFloat(teclado(`Digite o segundo numero:`));

if(numero1 < numero2){
    console.log(`O numero maior é ${numero2} e o numero menor é ${numero1}`);
    
}
else{
    console.log(`O numero maior é ${numero1} e o numero menor é ${numero2}`);
}