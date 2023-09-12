// 10 - Exercício de Funções com Listas - Ordenar Lista: 
// Escreva uma função que recebe uma lista de números e a ordena em ordem crescente. 

namespace exercicio10 {
    function ordenarNumeros(lista: number[]): number[] {
        const n = lista.length;
        
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
              const temp = lista[j];
              lista[j] = lista[j + 1];
              lista[j + 1] = temp;
            }
          }
        }
        
        return lista;
      }
      const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const numerosOrdenados = ordenarNumeros(numeros);
      console.log(numerosOrdenados);
}