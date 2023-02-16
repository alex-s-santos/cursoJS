//Para declarar variáveis utiliza var, let e const

var nome = 'Alex'; //Tem escopo global e pode ser redeclarada
let idade = 29; //Tem escopo local, pode apenas mudar o valor sem ser redeclarada
const altura = 1.65; //não muda o valor e nem pode ser redeclarada

//01 - Sobre VAR
var pessoa = 'José';
console.log(pessoa);

var pessoa = "João";
console.log(pessoa);

{
    var pessoa2 = 'Ana'; //declarada dentro de um bloco
}

console.log(pessoa2); //consegue chamar de qualquer parte do código, porque tem escopo global

//02 - Sobre LET

let pessoa3 = 'José';
console.log(pessoa3);

/*
let pessoa3 = 'João';
console.log(pessoa3); - Vai retornar erro porque não deixa redeclarar
*/

pessoa3 = 'João'; //Atribue novo valor
console.log(pessoa3);

{
    let pessoa4 = 'Pedro'; //declarada dentro de um bloco
}

//console.log(pessoa4) - Não consegue ser encontrado fora do bloco, porque tem escopo local

//03 - Sobre CONST

const pessoa5 = 'Ananias';
console.log(pessoa5);

/* 
const pessoa5 = 'Miguel';
console.log(pessoa5); - Retorna erro porque não pode redeclarar
*/

/*
pessoa5 = 'Judas';
console.log(pessoa5); - Não permite mudar o valor
*/

{
    const pessoa6 = 'Cláudio'; //Declarado dentro do bloco
}

//console.log(pessoa6); - Não pode ser encontrado fora do bloco, pois tem escopo de bloco (local)