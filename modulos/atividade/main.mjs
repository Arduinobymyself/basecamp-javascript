import { mostraIdade, mostraCidade, mostraHobby, somar, subtrair, multiplicar, dividir } from './funcoes.mjs';

console.log(mostraIdade('Marcelo', 51));

console.log(mostraCidade('Marcelo', 'Sorocaba'));

console.log(mostraHobby('Marcelo', 'Programar'));

let a = 10;
let b = 20

console.log(`A soma de ${a} com ${b} equivale a ${somar(a, b)} `);
console.log(`A subtração de ${a} com ${b} equivale a ${subtrair(a, b)}`);
console.log(`A multiplicação de ${a} com ${b} equivale a ${multiplicar(a, b)}`);
console.log(`A divisão de ${a} com ${b} equivale a ${dividir(a, b)}`);
console.log('Fim');


