// 3 - Exercício de Estrutura de Repetição - Soma dos Números Pares: 
// Escreva um programa que soma todos os números pares de 1 a 100 e exiba o resultado. 

namespace exercicio03 {
    let soma: number = 0;
    for (let i: number = 2; i <= 100; i += 2) {
        soma += i;
    }
    console.log(soma);
}