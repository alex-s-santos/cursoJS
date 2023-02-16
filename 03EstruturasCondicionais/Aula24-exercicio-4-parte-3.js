//Exercício 4 - Feira de frutas
/*Use a estrutura SWITCH CASE para retornar o preço da fruta
Maçã = R$15,00/kg
Manga = R$6,00/Kg
Morango = R$35,00/kg
Pêra = R$29,00/Kg
Se pedir outra fruta retorne: Não vendemos essa fruta
*/
let fruta = 'Pêssego';
let preco;
switch(fruta){
    case 'Maçã':
        preco = 15.00;
    break
    case 'Manga':
        preco = 6.00;
    break
    case 'Morango':
        preco = 35.00;
    break
    case 'Pêra':
        preco = 29.00;
    break
    default:
        preco = 'Não vendemos essa fruta';
}

console.log(`A ${fruta} custa R$${preco}/Kg`)