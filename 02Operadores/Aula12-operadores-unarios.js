//Operadores unários em JS
/*
INCREMENTO ++
DECREMENTO --
*/

let num = 2;
console.log(num++);//Aqui está incrementando pós fixado, por isso ficará apenas o valor original e na próxima execução é que terá o novo valor
console.log(num); //Aqui já tem o novo valor incrementado

console.log(num--); //Aqui o decremento é pós fixado assim mostra o valor inicial
console.log(num); //Aqui já tem o novo valor decrementado

console.log(++num) //Aqui já imprime incrementado pré-fixado
console.log(--num) //Aqui já imprime decrementado pré-fixado