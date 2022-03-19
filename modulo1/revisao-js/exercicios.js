// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a, b){
      let num = a - b
      return num
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = array.filter((numPares) => {
      return numPares % 2 === 0
  })
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numPares = array.filter((pares) => {
      return pares % 2 === 0
  })
  let novoArray = []
  for(num of numPares) {
      novoArray.push(num * num)
  }
  return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(num of array) {
      if(num > maiorNumero) {
          maiorNumero = num
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeroMaior = 0 
    let numeroMenor = 0
    if (num1 > num2) {
        numeroMaior = num1
        numeroMenor = num2
    } else {
        numeroMaior = num2
        numeroMenor = num1
    }

    let objetoNumeros = {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: numeroMaior % numeroMenor === 0,
        diferenca: numeroMaior - numeroMenor
    }
    return objetoNumeros

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let novoArray = []
   for(let i = 0; novoArray.length < n; i+=2){
      novoArray.push(i)
   }
   return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = ''
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        triangulo = 'Equilátero'
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        triangulo = 'Escaleno'
    } else {
        triangulo = 'Isósceles'
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = []
    let ordem = array.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    novoArray.push(ordem[ordem.length - 2])
    novoArray.push(ordem[1])
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atoresDoFilme = filme.atores.map((ator) => {
        return ' ' + ator
    })
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por` + atoresDoFilme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novoObjeto = {
       ...pessoa,
       nome: 'ANÔNIMO'
   }
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let autorizadas = pessoas.filter((pessoa) => {
       return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
   })
   return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoAutorizadas = pessoas.filter((pessoa) => {
      return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60
  })

  return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}