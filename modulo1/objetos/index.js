// Exercícios de interpretação de código

// 1. Leia o código abaixo

    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }
    
    // console.log(filme.elenco[0]) // Matheus Nachtergaele
    // console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
    // console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"
    
//     a) O que vai ser impresso no console?


// 2. Leia o código abaixo
    
    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"
    // console.log(gato) // nome: "Juba", idade: 3, raca: "SRD"
    // console.log(tartaruga) // nome: "Jubo", idade: 3, raca: "SRD"
    
//     a) O que vai ser impresso no console?
    
//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        // PEGA TODAS AS PROPRIEDADES DO OBJETO DESCRITO

// 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
//     return objeto[propriedade]
// }

// const pessoa = {
//     nome: "Caio", 
//     idade: 23, 
//     backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // false - pois foi mostrado o valor da propriedade backender que foi passado como parâmetro

// console.log(minhaFuncao(pessoa, "altura")) // undefined - pois não existe nenhuma propriedade chamada altura dentro do objeto

// a) O que vai ser impresso no console?

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?


// Exercícios de escrita de código


//1. Resolva os passos a seguir: 
    
    // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
    
    const pessoa = {
       nome: "Filipe", 
       apelidos: ["Lipe", "Filipinho", "Pepe"]
    }

    const result = (objeto) => {
        console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
    }

    result(pessoa)

        
    // b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

    const novaPessoa = {
        ...pessoa,
        apelidos: ['Vidal', 'Felipão', 'Lipinho']
    }

    result(novaPessoa)

    // 2. Resolva os passos a seguir: 
    
    // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    // 1. O valor de `nome`
    // 2. O numero de caracteres do valor `nome`
    // 3. O valor de `idade`
    // 4. O valor de `profissão`
    // 5. O numero de caracteres do valor `profissão`

    const humano = {
        nome: 'Pedro',
        idade: 28,
        profissao: 'Mecânico'
    }

    const novoHumano = {
        ...humano,
        nome: 'Samuel',
        idade: 25
    }

    const detalhe = (x, y) => {
        const array = [[x.nome, x.nome.length, x.idade, x.profissao, x.profissao.length], [y.nome, y.nome.length, y.idade, y.profissao, y.profissao.length]]
        return array
    }
    console.log(detalhe(humano, novoHumano))

// 3. Resolva os passos a seguir: 

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 


const carrinho = []
const fruta1 = {nome:'Banana', disponibilidade: true}
const fruta2 = {nome:'Uva', disponibilidade: true}
const fruta3 = {nome:'Morango', disponibilidade: true}
const func = (frut) => {
    let abc = carrinho.push(frut)
    return abc
}
func(fruta1)
func(fruta2)
func(fruta2)

console.log(carrinho)



