~~~
    function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let novoArray = [];
    let mensagem;

    for (numero of arrayDeNumeros) {

        if (numero === numeroEscolhido) {
        novoArray.push(numero)
        }
    }

    let quantidade = novoArray.length

    if (quantidade > 0) {
        mensagem = `O número ${novoArray[0]} aparece ${quantidade}x`
    } else {
        mensagem = "Número não encontrado"
    }

    return mensagem
    
    }
~~~