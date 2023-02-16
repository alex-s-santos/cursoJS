/*
01-Criar uma sentença de código imprimindo na tela o texto dados pessoais
02-Criar um bloco de código com as informações nome(aspas duplas), sobrenome(aspas simples), idade, altura, e se é casado(booleano) - Atentar aos tipos de dados - usando var, let e const adequar da melhor forma
03-Imprimir na tela com template string as informações adquiridas no bloco
*/

console.log('- DADOS PESSOAIS - ');
{
    var nome = "Alex";
    let sobrenome = 'Santos';
    let idade = 29;
    const altura = 1.65;
    console.log(`Nome: ${nome} | Sobrenome: ${sobrenome} | Idade ${idade} | altura: ${altura}`);
}