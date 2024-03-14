console.clear();
const teclado = require (`prompt-sync`)();

let idade: number = parseFloat(teclado(`sua idade?: `));
let peso: number = parseFloat(teclado(`seu peso?: `));

if(idade >= 18 && idade){
    if(peso >= 60){
    console.log(`Você pode doar sangue`)
    }
    else{
    console.log(`Seu peso é insuficiente para doar sangue`)

}
}
    else if(idade < 18 && peso < 60){
        console.log(`Seu preço e sua idade são insuficientes para doar sangue`)
    }
else {
    console.log(`Você não tem idade suficiente para doar sangue`)
}
