console.clear();
const teclado = require (`promot-sync`)();

let pergunta1: number = parseFloat(teclado(`Você telefonou para a vítima? (digite 1 para sim e 0 para não): `));
let pergunta2: number = parseFloat(teclado(`Esteve no local do crime? (digite 1 para sim e 0 para não): `));
let pergunta3: number = parseFloat(teclado(`Mora perto da vítima? (digite 1 para sim e 0 para não): `));
let pergunta4: number = parseFloat(teclado(`Devia para a vítima? (digite 1 para sim e 0 para não): `));
let pergunta5: number = parseFloat(teclado(`Já trbalhou com a vítima? (digite 1 para sim e 0 para não):`));

let interrogatorio : number = 0;

if(pergunta1 == 1){
    interrogatorio++;
}
if(pergunta2 == 1){
    interrogatorio++;
}
if(pergunta3 == 1){
    interrogatorio++;
}
if(pergunta4 == 1){
    interrogatorio++;
}
if(pergunta5 == 1){
    interrogatorio++;
}

if(interrogatorio == 2){
    console.log(`Suspeito`);
}
if(interrogatorio == 3 || interrogatorio == 4){
    console.log(`Assassino`);
}
if(interrogatorio == 5){
    console.log(`Assassino`);
}
if(interrogatorio == 0){
    console.log(`Inocente`);
}
