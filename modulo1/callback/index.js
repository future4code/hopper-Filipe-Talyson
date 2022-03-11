//----------- INTERPRETAÇÃO DE CÓDIGO --------------

// 1. Leia o código abaixo
    
    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" }
    // ]
    
    // const novoArrayA = usuarios.map((item, index, array) => {
    //    console.log(item, index, array)
    // })
    
//     a) O que vai ser impresso no console? // O map VAI PASSAR POR CADA ITEM DO ARRAY E VAI MANDAR PARA UMA FUNÇÃO DE CALLBACK, ONDE O PRIMEIRO PARAMETRO MOSTRARÁ TODO O ITEM, POR EXEMPLO: {nome: "Amanda Rangel", apelido: "Mandi"}. O SEGUNDO PARAMETRO MOSTRARÁ O INDEX DO ITEM, POR EXEMPLO: 0. E O TERCEIRO PARAMETRO MOSTRARÁ O ARRAY COMPLETO.
    
// 2. Leia o código abaixo

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayB = usuarios.map((item, index, array) => {
    //    return item.nome
    // })
    
    //  console.log(novoArrayB)
    
//     a) O que vai ser impresso no console? // SERÁ MOSTRADO O NOME DE CADA USUÁRIO DO ARRAY QUE SE ENCONTRA DENTRO DO OBJETO
    
// 3. Leia o código abaixo

    // const usuarios = [
    //   { nome: "Amanda Rangel", apelido: "Mandi" },
    //   { nome: "Laís Petra", apelido: "Laura" },
    //   { nome: "Letícia Chijo", apelido: "Chijo" },
    // ]
    
    // const novoArrayC = usuarios.filter((item, index, array) => {
    //    return item.apelido !== "Chijo"
    // })
    
    // console.log(novoArrayC)
    
//     a) O que vai ser impresso no console? // VAI MOSTRAR SOMENTE O PRIMEIRO E SEGUNDO ITEM DO ARRAY E VAI IGNORAR O ITEM QUE POSSUI COMO APELIDO 'Chijo'






//----------- ESCRITA DE CÓDIGO --------------

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
        
    
//     a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomeDog = pets.map((dogs) => {
    return dogs.nome
})
console.log(nomeDog)
    
//     b) Crie um novo array apenas com os cachorros salsicha
const dogSalsicha = pets.filter((dogs) => {
    return dogs.raca === 'Salsicha'
})

console.log(dogSalsicha)
    
//     c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const desconto = pets.filter((dogs) => {
    return dogs.raca === 'Poodle' 
})

const mensagem = desconto.map((dogs) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dogs.nome}`
})

console.log(mensagem)
        
    
// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
    
//     a) Crie um novo array que contenha apenas o nome de cada item
const nomeItem = produtos.map((produto) => {
    return produto.nome
})
console.log(nomeItem)
    
//     b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const desconto5 = produtos.map((produto) => {
    const objeto = {
        nome: produto.nome,
        preco: (produto.preco - (produto.preco * 5 / 100)).toFixed(2)
    }
    return objeto
})

console.log(desconto5)
    
//     c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((produto) => {
    return produto.categoria === 'Bebidas'
})
console.log(bebidas)
    
//     d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const ype = produtos.filter((produto) => {
    return produto.nome.includes('Ypê')
})
console.log(ype)      
    
//     e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const frase = ype.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(frase)