// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt('Digite a altura do retângulo'))
  const larguraRetangulo = Number(prompt('Digite a largura do retângulo'))

  console.log(alturaRetangulo * larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual!'))
  const anoNascimento = Number(prompt('Digite o ano do seu nascimento!'))

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua cor favorita')
  const cor2 = prompt('Digite uma outra cor favorita')
  const cor3 = prompt('Digite uma ultima cor favorita')
  
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let result = custo / valorIngresso
  return result
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanho = string1.length === string2.length
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  let ultimo = array[array.length - 1]
  array[0] = ultimo
  array[array.length - 1] = primeiro
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let x = string1.toLowerCase()
  let y = string2.toLowerCase()
  let iguais = x === y
  return iguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual!'))
  let anoNascimento = Number(prompt('Digite o ano de nascimento de uma pessoa!'))
  let anoEmissaoRg = Number(prompt('Digite o ano em que sua carteira de identidade foi emitida!'))
  let idade = anoAtual - anoNascimento  
  let tempoRg = anoAtual - anoEmissaoRg
  let logica1 = idade <= 20 && tempoRg >= 5
  let logica2 = idade > 20 && idade <= 50 && tempoRg >= 10
  let logica3= idade > 50 && tempoRg >= 15
  let result = logica1 || logica2 || logica3
  console.log(result)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let logica1 = ano % 400 === 0
  let logica2 = ano % 4 === 0 && ano % 100 !== 0
  let result = logica1 || logica2
  return result
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maior18 = prompt('Você tem mais de 18 anos?')
  let ensinoMedio = prompt('Você possui ensino médio completo?')
  let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  let logica1 = maior18 === 'sim'
  let logica2 = ensinoMedio === 'sim'
  let logica3 = disponibilidade === 'sim'
  let result = logica1 && logica2 && logica3
  console.log(result)
}