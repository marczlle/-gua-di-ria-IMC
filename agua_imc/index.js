// variável padrão do readline 

var readlineSync = require('readline-sync');

// variáveis

var nome = readlineSync.question("Digite seu nome: ");
var whatsapp = readlineSync.question("Digite seu número de Whatsapp: ");
var peso =readlineSync.questionFloat("Digite seu peso: ");
var altura = readlineSync.questionFloat("Digite sua altura: ");

// conta consumo ideal de água diário

var AguaDiaria = (peso * 0.035)

console.log(`Olá ${nome}, sua quantidade diária de água deve ser de: ${AguaDiaria.toFixed(3)}L`)

// cálculo imc

var imc = peso / (altura ** 2);

// tabela IMC

if (imc < 18.5){
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso.`);
} else if (imc > 18.5, imc < 24.9 ) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está no peso normal.`);
} else if (imc > 25, imc < 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem sobrepeso.`);
} else if (imc > 30, imc < 34.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem obesidade grau 1 (leve).`);
} else if (imc > 35, imc < 39.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem obesidade grau 2 (moderada).`);
} else { (imc > 40)
    console.log(`Seu IMC é ${imc.toFixed(2)}, você tem obesidade grau 3 (mórbida).`);
}

