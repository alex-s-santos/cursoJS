/*
EXERCÍCIO 3 - PARTE 1: FUNDAMENTOS
DISSECANDO UMA STRING
*/

/*
01-CRIE UMA VARIÁVEL E ATRIBUA UM TEXTO QUE VOCÊ GOSTE SEM USAR VÍRGULAS OU PONTOS
02-CONVERTA A STRING EM ARRAY
03-VERIFIQUE SE EXISTE UMA PALAVRA ESCOLHIDA DENTRO DO ARRAY
04-VERIFIQUE SE TEM A LETRA "A" DENTRO DESSA PALAVRA
05-TROQUE A LETRA "A" POR "E"
06-IMPRIMA NA TELA SE A PALAVRA ESCOLHIDA ESTÁ NO ARRAY, E SE ELA TEM A LETRA A
06-IMPRIMA NA TELA A PALAVRA E A POSIÇÃO DA LETRA "A"
07-IMPRIMA NA TELA A PALAVRA MODIFICADA, a quantidade de letras que ela tem, a palavra modificada maiúscula e minúscula
*/

let textoQualquer = 'Porque Deus amou o mundo de tal maneira que deu o seu filho unigênito para que todo aquele que nEle crê não pereça mais tenha vida eterna';
let arrayDoTexto = textoQualquer.split(' ');
let palavraEscolhida = 'eterna';
let verificaPalavra = arrayDoTexto.includes(palavraEscolhida);
let verificaLetraA = palavraEscolhida.includes('a');
let posicaoLetraA = palavraEscolhida.indexOf('a');
let palavraModificada = palavraEscolhida.replace('a', 'e');
let palavraMaiuscula = palavraModificada.toLocaleUpperCase();
let palavraMinuscula = palavraModificada.toLocaleLowerCase();

console.log(`Palavra está no array: ${verificaPalavra} | Palavra contém a letra A: ${verificaLetraA}.`);
console.log(`A palavra escolhida é: ${palavraEscolhida} | A letra "a" está na posição ${posicaoLetraA}.`);
console.log(`A palavra modificada é: ${palavraModificada}, ela tem ${palavraModificada.length} letras, em maiúsculo fica: ${palavraMaiuscula} e em minúsculo fica: ${palavraMinuscula}`);