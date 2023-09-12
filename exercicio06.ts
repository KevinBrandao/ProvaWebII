// 6 - Exercício de Funções com Retorno - Fatorial: 
// Escreva uma função que calcula o fatorial de um número inteiro. 

namespace exercicio06 {
    function calcularFatorial(fatorial: number) {
      let primeiroMultipicador: number = fatorial - 1;
      for (let i = primeiroMultipicador; i > 1; i--) {
        return fatorial *= i;
      }
      console.log(calcularFatorial(10));
    } 
}