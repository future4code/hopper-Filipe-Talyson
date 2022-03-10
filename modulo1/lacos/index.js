// INTERPRETAÇÃO DE CÓDIGO

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
//     let valor = 0
//     for(let i = 0; i < 5; i++) {
//       valor += i
//     }
//     console.log(valor)

// O CÓDIGO ACIMA REPETINDO OS NÚMEROS DE 0 A 5, POIS A CONDIÇÃO DISSE QUE ENQUANTO A VARIÁVEL 'i' FOR MENOR QUE 5 É PRA REPETIR O CÓDIGO DENTRO DO BLOCO. APÓS A EXECUÇÃO DO CÓDIGO DENTRO DO BLOCO OCORRE A IMPLEMENTAÇÃO DE 1 NÚMERO
    
// 2. Leia o código abaixo:
    
//     const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//     for (let numero of lista) {
//       if (numero > 18) {
//     		console.log(numero)
//     	}
//     }
    
//     a) O que vai ser impresso no console? // 19, 21, 25, 27, 30
    
//     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? // NÃO..PARA ACESSAR O ÍNDICE DE UM ELEMENTO ESPECÍFICO DA LISTA É PRECISO USAR O 'for'
    
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 
    
//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
//     let quantidadeAtual = 0
//     while(quantidadeAtual < quantidadeTotal){
//       let linha = ""
//       for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//         linha += "*"
//       }
//       console.log(linha)
//       quantidadeAtual++
//     }

//   //  RESPOSTA:
//     // *
//     // **
//     // ***
//     // ****
/********************************************************************************************************* */
//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//     1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//     c) Por fim, imprima o array com os nomes dos bichinhos no console

let bichinhosEstimacao = Number(prompt('Digite a quantidade de bichinhos de estimação que você possui!'))

let meusBichinhos =[]

if(bichinhosEstimacao < 1){
    console.log('Que pena! Você pode adotar um pet!')
} else {
    for (let i = 1; i <= bichinhosEstimacao ;i++) {
        let nomeBichinho = prompt(`Digite o nome do ${i}º bichinho!`)
        meusBichinhos.push(nomeBichinho)
    }
}

console.log(meusBichinhos)
    
// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//     a) Escreva um programa que **imprime** cada um dos valores do array original.
    
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a
for(numero of arrayOriginal) {
    console.log(numero)
}

//b
console.log('----------')
for(numero of arrayOriginal) {
    console.log(numero / 10)
}
console.log('----------')
//c
let novoArray = []
for(numero of arrayOriginal) {
    if (numero % 2 === 0){
        novoArray.push(numero)
    }
}
console.log(novoArray)
console.log('----------')
//d
let outroArray = []
for(let i = 0; i < arrayOriginal.length ; i++) {
    let texto = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
    outroArray.push(texto)
}
console.log(outroArray)
//e
let numeroMaior = 0
for(numero of arrayOriginal) {
    if(numero > numeroMaior){
        numeroMaior = numero
    }
}
let numeroMenor = numeroMaior
for(numero of arrayOriginal) {
    if(numero < numeroMenor){
        numeroMenor = numero
    }
}

console.log(`O maior número é ${numeroMaior} e o menor é ${numeroMenor}`)
