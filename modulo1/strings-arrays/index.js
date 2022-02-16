/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS */

/* 1 -  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa. */

/*
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9
*/

/* 2 - Leia o código abaixo com atenção */

/*
    
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    
    Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

    R: SUBI NUM ONIBUS EM MIRROCOS 27

*/

/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */

/* 1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

const nome = prompt('Digite seu nome!')
const email = prompt('Digite seu email!')

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nome}`)

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista */

let comidaPreferida = ['Lasanha', 'Strogonoff', 'Pizza', 'Salpicão', 'Picanha']
console.log(comidaPreferida)
console.log(`Essas são as minhas comidas preferidas:
${comidaPreferida[0]}, 
${comidaPreferida[1]}, 
${comidaPreferida[2]}, 
${comidaPreferida[3]}, 
${comidaPreferida[4]}`
)

let comidaUsuario = prompt('Digite sua comida preferida!')
comidaPreferida[1] = comidaUsuario
console.log(comidaPreferida)

/* 3 - Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console

*/

let array = []
let listaDeTarefas = array

listaDeTarefas[0] = prompt('Digite uma tarefa a ser realizada hoje')
listaDeTarefas[1] = prompt('Digite outra tarefa a ser realizada hoje')
listaDeTarefas[2] = prompt('Digite uma ultima tarefa a ser realizada hoje')

console.log(listaDeTarefas)

let indice = prompt('Digite o número da tarefa já realizada hoje: 0, 1 ou 2')
listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)