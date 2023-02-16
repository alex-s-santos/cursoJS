/*
EXERCÍCIO 02 - PARTE 1: FUNDAMENTOS
*/

/*
01-CRIE DUAS VARIÁVEIS: UMA PARA O 1º NÚMERO, DO  TIPO NUMBER, OUTRA PARA O 2º NÚMERO COM O TIPO STRING
02-TRANSFORME O SEGUNDO NÚMERO EM TIPO NUMBER
03-ATRIBUA A UMA VARIÁVEL A SOMA DOS DOIS VALORES
04-EXIBA O RESULTADO NA TELA COM TEMPLATE STRING
*/

let numero1 = 10;
let numero2 = '25';
let soma

let numero2TipoNumber = Number(numero2);

soma = numero1 + numero2TipoNumber;

console.log(`A soma entre: ${numero1} e ${numero2}, é igual a ${soma}.`);