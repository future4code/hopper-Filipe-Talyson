/* Exercícios de interpretação de código */

/*
1. Leia o código abaixo

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
// 10
// 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// A função será executada, e será disponibilizado para o escopo global o resultado da multiplicação por conta da palavra chaves return, porém sem o console.log nada será mostrado no console.

*/

/*
2. Leia o código abaixo
  
    let textoDoUsuario = prompt("Insira um texto");
    
    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    
    
    a. Explique o que essa função faz e qual é sua utilidade
    // Essa função basicamente verifica se na frase em que o usuário digitou possui a palavra 'cenoura', se exite retorna true, se não existe, retorna false. O método toLowerCase serve para transformar tudo em letra minúscula antes de verificar a existência da palavra 'cenoura', isso serve para permitir uma busca eficaz mesmo se o usuário digitar a frase com letras maiúsculas.
    
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         i.   `Eu gosto de cenoura` // true
         ii.  `CENOURA é bom pra vista` // true
         iii. `Cenouras crescem na terra` // false
*/

/* Exercícios de escrita de código */

/*
1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
*/

let informacoes = () => {
    console.log("Eu sou Filipe, tenho 25 anos, moro em Itabira e sou estudante")
}
/* ------------------------------------------------*/
const nome = prompt('Digite seu nome!')
const idade = prompt('Digite sua idade!')
const cidade = prompt('Digite seu cidade!')
const proficao = prompt('Digite sua profissão!')

const informacoesPessoais = (nome, idade, cidade, proficao) => {
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${proficao}`

    return frase
}

console.log(informacoesPessoais(nome, idade, cidade, proficao))

/*
2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

let numero = Number(prompt('Digite um número!'))
let outroNumero = Number(prompt('Digite outro número!'))

let somaNumeros = (num1, num2) => {
    let soma = num1 + num2
    return soma
}

console.log(`A soma de ${numero} e ${outroNumero} é: ${somaNumeros(numero, outroNumero)}`)
/* ---------------------------------------- */
let eMaior = (numero, outroNumero) => {
    let logica = numero >= outroNumero
    return logica
}

console.log(`${numero} é maior ou igual que ${outroNumero}? ${eMaior(numero, outroNumero)}`)
/* ---------------------------------------- */
let umNumero = Number(prompt('Digite um número qualquer!'))

const verificaPar = (num) => {
    let logica = num % 2 === 0
    return logica
}

console.log(`${umNumero} é par? ${verificaPar(umNumero)}`)
/* ---------------------------------------- */
const mensagem = prompt('Digite uma mensagem qualquer!')
const tamanhoMensagem = (msg) => {
    let tamanho = msg.length
    let maiuscula = msg.toUpperCase()
    return `${tamanho}, ${maiuscula}`
}

console.log(tamanhoMensagem(mensagem))

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10

*/

const somar = (num1, num2) => {
    return num1 + num2
}

const subtrair = (num1, num2) => {
    return num1 - num2 
}

const multiplicar = (num1, num2) => {
    return num1 * num2
}

const dividir = (num1, num2) => {
    return num1 / num2
}

let numDigitado = Number(prompt('Digite um número'))
let numDigitado2 = Number(prompt('Digite outro número'))

console.log(`soma: ${somar(numDigitado, numDigitado2)}`)
console.log(`subtração: ${subtrair(numDigitado, numDigitado2)}`)
console.log(`multiplicação: ${multiplicar(numDigitado, numDigitado2)}`)
console.log(`divisão: ${dividir(numDigitado, numDigitado2)}`)
