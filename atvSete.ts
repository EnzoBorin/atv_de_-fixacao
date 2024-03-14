console.clear();
const teclado = require (`prompt-sync`)();

let numeroMaca: number = parseFloat(teclado(`Quais maçãs você quer: `));
let percoMaca: number = 0

if (numeroMaca < 12){
    percoMaca = 0.3
}
else{
    percoMaca = 0.25
}

let total: number = 0
total = percoMaca * numeroMaca

console.log(`O valor das maçãs são ${total} reais`);