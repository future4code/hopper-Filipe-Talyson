/*
Exercício de interpretação de código

Exercício 1 

let a = 10
let b = 10
b = 5

console.log(a, b)
Resultado: 10 5
-------------------------------
Exercício 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
Resultado: 10 10 10
--------------------------------
Exercício 3

let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${salarioDia/horasTrabalhadasDia} por hora`)
Resultado: 
Quando o usuário abrir o navegador, abrirá uma caixa pelo qual primeiramente
terá que colocar as horas que trabalha por dia. Ex: 8. Em seguida quanto recebe por dia. Ex: 50

O usando os exemplos citados, o resultado será um caixa de alerta com a seguinte informação: Voce recebe 6.25 por hora
-------------------------------------
*/

// Exercício de escrita de código

// Exercício 1

let nome
let idade

console.log(typeof nome, typeof idade)

/*
O tipo das duas variáveis acima foi undefined,
isso porque não foi atribuído nenhum valor a elas
*/

nome = prompt("Digite seu nome:")
idade = prompt("Digite a sua idade:")

console.log(typeof nome, typeof idade)

/*
O tipo das duas variáveis acima foi string,
Mesmo a idade digitada sendo um número, ela é do tipo string,
isso porque o prompt transforma tudo em string
*/

console.log("Olá", nome, "você tem", idade, "anos")

// Exercício 2

let exercicioFisico = "Você faz exercícios físicos?"
let cigarro = "Você fuma?"
let estadoCivil = "Você é casado(a)?"

let respostaExercicioFisico = "Sim"
let respostaCigarro = "Não"
let respostaEstadoCivil = "Não"

console.log(exercicioFisico, respostaExercicioFisico)
console.log(cigarro, respostaCigarro)
console.log(estadoCivil, respostaEstadoCivil)

// Exercício 3

let a = 10
let b = 25
let c = a
a = b
b = c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b)