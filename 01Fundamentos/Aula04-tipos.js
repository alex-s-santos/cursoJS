//1 - NUMBER

// 1.1 - Pode ser inteiro
let idade = 29;
console.log(idade);

//1.2 - Pode ser real (float)
const altura = 1.65; //Usando o ponto ao invés da vírgula
console.log(altura);

idade = '29'; //tipagem dinâmica (pode mudar o tipo na declaração)
console.log(idade + 1);
console.log(Number(idade) + 1); //Transforma string em Number

const media = 5.3333333;
console.log(media);
console.log(media.toFixed(1)); //Determina a quantidade de casas decimais



//2 - STRING
let nome = "Alex"; //Aspas duplas
nome = 'Santos'; //Aspas simples
nome = `Souza`; //Crase

console.log(nome);

//concatenar string
console.log('Olá, ' + nome + "!");

//Template string
console.log(`Olá, ${nome}!`);
console.log(`a soma de 1 + 1 é igual a: ${1 + 1}`);

console.log(nome.charAt(2)); //Verifica qual caractere está na posição específica
console.log(nome.indexOf('a')); //Diz a posição da letra especificada

console.log(nome.includes('za')); //Verifica se a string tem determinado caractere dentro dela
const hino = 'Ouviram do ipiranga as margens pláscidas...';
console.log(hino.includes('ipira'));



let idade2 = 29;
console.log(idade2 + 1);
console.log(String(idade2) + 1); //Transforma Number para String

console.log(hino.split(' ')); //Converte string para array
const arrayHino = hino.split(' ');
console.log(arrayHino);

let alex = 'Alex';
let modificado = alex.replace('A', 'E'); //Para trocar um caractere por outro
console.log(modificado);

let maiusculo = alex.toLocaleUpperCase() //Deixa tudo maiúsculo
console.log(maiusculo)
let minusculo = alex.toLocaleLowerCase() //Deixa tudo minúsculo
console.log(minusculo)




//BOOLEANO

let casado = false;
console.log(casado);

casado = true;
console.log(casado);