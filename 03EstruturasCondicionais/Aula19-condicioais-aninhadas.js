//Condicionais aninhadas em JS (estrutura IF ELSE IF)
//usada para multiplas condição quando alguma das condições retornar verdadeiro

let nota = 6;

if(nota == 10){
    console.log('Parabéns, aluno nota 10!');
}else if(nota < 10 && nota >= 7){
    console.log('Aprovado!');
}else if(nota < 7 && nota >= 3){
    console.log('Recuperação!');
}else if(nota < 3 && nota >= 0){
    console.log('Reprovado!');
}else{
    console.log('Nota inválida!');
}