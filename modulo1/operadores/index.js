/* Exercício de interpretação de código */

/* Exercício 1 */

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. boolean
*/

/* Exercício 2 */

/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

O prompt transforma tudo em string, sendo assim, vai acontecer uma concatenação
em vez de soma, então se o primeiroNumero for igual a 5 e o segundoNumero for 
igual a 5, no console ficaria 55 e não 10 como o esperado
*/

/* Exercício 3 */

/*
Para que o valore impresso no console seja a soma dos dois números é preciso 
fazer um conversão de tipos, ou seja, converter de string para number,
para fazer isso basta usar o: Number():

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/

/* Exercícios de escrita de código */

/* Exercício 1 */

let idadeUsuario = Number(prompt('Digite sua idade'))
let idadeMelhorAmigo = Number(prompt('Digite a idade do seu melhor amigo'))

console.log('Sua idade é maior do que a do seu melhor amigo?', idadeUsuario > idadeMelhorAmigo)

let diferencaIdade = idadeUsuario - idadeMelhorAmigo
console.log(diferencaIdade)

/* Exercício 2 */

let par = Number(prompt('Digite um número par'))
console.log(par % 2)

// O PADRÃO É QUE TODO NÚMERO PAR, O RESTO DA DIVISÃO POR DOIS É ZERO
// SE O USUÁRIO INSERIR UM NÚMERO ÍMPAR, O RESTO DA DIVISÃO SERÁ 1

/* Exercício 3 */

let idade = Number(prompt('Digite sua idade'))
let dias = idade*365

console.log(`a. ${idade*12} meses`)
console.log(`b. ${dias} dias`)
console.log(`c. ${dias*24} horas`)

/* Exercício 4 */

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite um outro número"))

console.log('O primeiro numero é maior que segundo?', num1 > num2)
console.log('O primeiro numero é igual ao segundo?', num1 === num2)
console.log('O primeiro numero é divisível pelo segundo?', (num1 % num2) === 0)
console.log('O segundo numero é divisível pelo primeiro?', (num2 % num1 === 0))