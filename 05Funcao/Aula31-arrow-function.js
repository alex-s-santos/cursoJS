//Arrow function foi criada no ES6 2015
//Sintaxe reduzida e contexto léxico local (onde o this não varia)

//Comparando function literal com arrow function

//* 1. Literal

function soma(a, b){
    return a + b;
};

console.log(soma(5, 6));

//* 2. Arrow function

let soma2 = (a, b) => {return a + b;};

console.log(soma2(6, 9));

//Caso use o bloco delimitador por chaves, usar o return, caso não, o return é opicional

let soma3 = (a, b) => a + b;

console.log(soma3(5, 9));

// Caso tenha apenas um parâmetro, os parenteses são opcionais

let dobro = a => a * 2; //OBS: Se não tiver parâmetro precisará de toda forma de parênteses ou um underline (_)

console.log(dobro(9));