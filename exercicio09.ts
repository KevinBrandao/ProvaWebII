// 9 - Exercício de Funções Recursivas - Fibonacci: 
// Crie uma função recursiva para calcular o décimo termo da sequência de Fibonacci. 

namespace exercicio09 {
    function fibonacci(n: number): number {
        if (n <= 1) {
          return n;
        }
        
        return fibonacci(n - 1) + fibonacci(n - 2);
      }
      
      const decimoTermo = fibonacci(10);
      console.log(decimoTermo);
}