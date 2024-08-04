const nomeCompleto = 'João Pedro Mesquita';
const idade = 21;
const peso = 95;
const alturaEmM = 1.81;
const anoAtual = 2024;
let imc = peso / (alturaEmM*alturaEmM);
let anoNascimento = anoAtual - idade;

// template strings

console.log(`${nomeCompleto} tem ${idade} anos`);
console.log(`Pesa ${peso} kg, tem ${alturaEmM} de altura, e seu IMC é de ${imc}`);
console.log(`${nomeCompleto} nasceu em ${anoNascimento}.`);
