console.clear();
const teclado = require (`prompt-sync`)();

let n1: number = parseFloat(teclado(`Digite a primeira nota`));
let n2: number = parseFloat(teclado(`Digite a segunda nota`));
let media: number = (n1+n2)/2

if(media >= 8.5 && media == 10){
    console.log(`Nota é A e media é igual a ${media}`);
}
if(media >= 7 && media < 8.5){
    console.log(`nota é C e media é igual a ${media}`);
}
if(media >= 5 && media< 7){
    console.log(`Nota é C e media é igual a ${media}`);
}
if(media < 3){
    console.log(`Nota é D e media é igual a ${media}`);
}
else if (media < 0 && media > 10){
    console.log(`Erro`);
}