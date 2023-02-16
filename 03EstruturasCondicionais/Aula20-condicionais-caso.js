//Condicionais Caso em JS (estrutura SWITCH CASE)
//Usado para múltiplas condições quando se tem uma condição bem definida (sem intervalos)

let nota = 8;

switch(nota){
    case 10:
        console.log('Parabéns, aluno nota 10');
        break
    case 9: case 8: case 7:
        console.log('Aprovado!')
        break
    case 6: case 5: case 4: case 3:
        console.log('Recuperação!')
        break
    case 2: case 1: case 0:
        console.log('Reporvado!')
        break
    default:
        console.log('Nota inválida!')
}