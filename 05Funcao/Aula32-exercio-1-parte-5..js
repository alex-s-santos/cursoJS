//Exercício 1 funções
/*Crie uma função que receba dados do ano de nascimento. Nessa função determine o ano atual. Calcule a idade da pessoa,
 verifique se a pessoa está apta a votar e retorne essa informação:
1. Menor que 16 não vota
2. 16 até 18 e a cima de 60 voto opcional
3. 18 até 60 voto obrigatório
*/
function verificadorDeVotantes(anoNasc){
    let tempo = new Date;
    anoAtual = tempo.getFullYear();
    let idade;
    if(anoNasc > anoAtual || anoNasc < 0){
        return 'Ano de nascimento inválido!';
    }else{
        idade = anoAtual - anoNasc;

        if(idade < 16){
            return `Idade: ${idade} anos, não pode votar!`;
        }else if(idade >= 16 && idade < 18 || idade > 60){
            return `Idade: ${idade} anos, voto opcional!`;
        }else{
            return `Idade: ${idade} anos, voto obrigatório!`;
        };
    };
};

console.log(verificadorDeVotantes(-1));
console.log(verificadorDeVotantes(2024));
console.log(verificadorDeVotantes(2020));
console.log(verificadorDeVotantes(2010));
console.log(verificadorDeVotantes(2006));
console.log(verificadorDeVotantes(1941));
console.log(verificadorDeVotantes(2003));
console.log(verificadorDeVotantes(1993));
console.log(verificadorDeVotantes(-1956));