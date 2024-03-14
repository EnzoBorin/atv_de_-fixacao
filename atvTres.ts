console.log();
const teclado = require (`prompt-sync`)();

let vogalA: string = `a`;
let vogalE: string = `e`;
let vogalI: string = `i`;
let vogalO: string = `o`;
let vogalU: string = `u`;

let letra : string = teclado(`Digite uma letra: `);

if( letra == vogalA || vogalE || vogalI || vogalO || vogalU ){
    console.log(`a letra ${letra} é vogal`)

}
else{
    console.log(`a letra ${letra} é consoante`)
}