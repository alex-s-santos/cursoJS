//Exercício 3 - Calculadora de ICM
//Crie uma calculadora de que alcule o ICM a partir do peso e altura e retorne informações 
//de acordo com os resultados, recebendo peso dividido pela altura ao quadrado

/*
-Menor que 18,5 - Abaixo do peso
-Entre 18,5 e 24,9 - Peso normal
-Entre 25,0 e 29,9 - Excesso de peso
-Entre 30,0 e 34,9 - Obesidade Grau 1
-Entre 35,0 e 39,9 - Obesidade Grau 2
-A cima de 40,0 - Obesidade Grau 3 (Mórbida)
*/

let peso = -3;
let altura = 1.64;
let imc = (peso / altura ** 2).toFixed(2);
let info;

if(imc >=0 && imc < 18.5){
    info = 'a baixo do peso';
}else if(imc >= 18.5 && imc <= 24.9){
    info = 'no peso normal';
}else if(imc > 24.9 && imc <= 29.9){
    info = 'com excesso de peso';
}else if(imc > 29.9 && imc <= 34.9){
    info = 'com obesidade grau 1';
}else if(imc > 34.9 && imc <= 39.9){
    info = 'com obesidade grau 2';
}else if(imc >= 40){
    info = 'com obesidade mórbida';
}else{
    info = '[peso ou altura inválidos]';
}

console.log(`Seu IMC é: ${imc} e você está ${info}.`);