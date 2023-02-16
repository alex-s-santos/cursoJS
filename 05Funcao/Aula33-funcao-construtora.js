/*Função construtora é uma função que serve de molde para criar outras funções que receberão os mesmos
atributos que ela. E poderão ser instanciadas a partir no NEW NOMEDAFUNÇÃOCONSTRUTORA, se quisermos
criar atributos privados, usamos let ou const, se quisermos atributos públicos, usamos o this.nomedoatributo*/

//Por conveção nomeia com inicial maiúscula

function Casa(valor = null){
    this.valor = valor;
    this.vendido = false;
    this.proprietario = null; // atributo público
    let lucro; //atributo privado usado para não permitir alterações do usuário
    if(valor === null || valor < 35000){
        lucro = 0;
    }else{
        lucro = valor + (valor * 0.30);
    }

    return this.lucro = lucro.toFixed(2); //se quiser chamar o atributo privado para fora da função atribui ele a um this 
};


//Instanciando
const APARTAMENTO = new Casa;
console.log(APARTAMENTO); //Vamos que ele é o objeto como um espelho da função construtora Casa

const DUPLEX = new Casa(1650000);
console.log(DUPLEX);

const TRIPLEX = new Casa(5750639.99);
TRIPLEX.vendido = true; //posso manipular os atributos através da notação ponto
TRIPLEX.proprietario = 'Lula?';
console.log(TRIPLEX); //Quando retornar estará com os atributos alterados.