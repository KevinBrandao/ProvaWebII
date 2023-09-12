// 8 - Exercício de Funções com Parâmetros Padrão - Calculadora Simples: 
// Implemente uma função de calculadora que pode realizar operações de adição, subtração, multiplicação e divisão com valores padrão de 0 se nenhum valor for fornecido. 

namespace exercicio08 {
  function calculadoraBasica(num1: number, num2: number, operacao: string): number {
        switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new Error('Operação inválida.');
        }
    }
    const resultado = calculadoraBasica(5, 31, '+');
    console.log(resultado); 
}