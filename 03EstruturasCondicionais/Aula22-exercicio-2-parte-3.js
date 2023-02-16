//Exercício 2 - de Uber ou de ônibus?
//Crie uma variável tipo boolean para armazenar se o usuário está apressado ou não
//crie duas variáveis que receberão tempo e duas que receberão valores e uma para receber o km total
//Se o usuário estiver apressado, ele vai de Uber e se não vai de ônibus
//Calcule quanto gasta no km total para o uber e para o ônibus
//Calcule o tempo gasto pelo uber e ônibus dividindo o km total pelo tempo gasto de cada um
//Diga qual o tempo e valor que o usuário vai gastar

let apressado = true;
let uberTarifa = 1.30; 
let onibusTarifa = 0.50;
let uberTempo = 1.4;
let onibusTempo = 0.5;
let kmTotal = 15;

let precoUber = uberTarifa * kmTotal;
let precoOnibus = onibusTarifa * kmTotal;
let tempoU = kmTotal / uberTempo;
let tempoO = kmTotal / onibusTempo;

if(apressado == true){
    console.log(`Você gastará R$${precoUber.toFixed(2)} e levará ${tempoU.toFixed(0)}min para chegar.`)
}else{
    console.log(`Você gastará R$${precoOnibus.toFixed(2)} e levará ${tempoO.toFixed(0)}min para chegar.`)
}