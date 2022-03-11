/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vindas ao jogo de Blackjack!')
const iniciarRodada = confirm('Quer iniciar uma nova rodada?')
if (!iniciarRodada) {
   console.log('O jogo acabou')
} else {
   const carta = (carta1, carta2) => {
      let valor = carta1.valor + carta2.valor
      let objeto = {
         texto: `cartas: ${carta1.texto} ${carta2.texto}  - pontuação ${valor}`,
         value: valor 
      }
      return objeto
   }

   let usuario = carta(comprarCarta(), comprarCarta())
   let computador = carta(comprarCarta(), comprarCarta())

   console.log(`Usuario - ${usuario.texto}`)
   console.log(`Computador - ${computador.texto}`)

   if(usuario.value > computador.value) {
      console.log('O usuario ganhou')
   } else if (computador.value > usuario.value) {
      console.log('O computador ganhou')
   } else {
      console.log('Empate')
   }
      
}