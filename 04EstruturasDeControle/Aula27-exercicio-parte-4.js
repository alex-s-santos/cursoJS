//Exercício estruturas de repetição - Tabuada de...
/*OBS: Como as estruturas while e do while são repetições indetermidas, para não dar loop infinito, nessa
seção usaremos o mesmo exemplo para as 3 estruturas, com número de repetições determinado*/

/*
-Crie uma variável
-Faça operações com as estruturas de repetição, para reproduzir uma tabuada de 0 a 10 imprimido a operação e 
resultado na tela
*/

//while
let primeiroNumero = 1;
let contador1 = 0;

while (contador1 < 10){
    contador1++;
    console.log(`${primeiroNumero} x ${contador1} = ${primeiroNumero * contador1}`);
}



//do while
let segundoNumero = 5;
let contador2 = 0;

do{
    contador2++;
    console.log(`${segundoNumero} x ${contador2} = ${segundoNumero * contador2}`);
} while(contador2 < 10)



//for
let terceiroNumero = 105;

for(let contador3 = 0; contador3 <= 10; contador3++){
    console.log(`${terceiroNumero} x ${contador3} = ${terceiroNumero * contador3}`);
}