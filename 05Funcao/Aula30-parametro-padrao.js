function soma(a = 5, b = 7){ //Assume os valores pré atribuidos caso não passe o parâmetro
    return a + b;
}

console.log(soma()) //retorna o valor com os parâmetros padrões
console.log(soma(7))

function saudacao(nome = 'Usuário'){
    return 'Olá, ' + nome;
};

console.log(saudacao())
console.log(saudacao('Pedro'))