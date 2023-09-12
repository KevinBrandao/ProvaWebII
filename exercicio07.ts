// 7 - Exercício de Funções sem Retorno - Imprimir Padrão: 
// Crie uma função que imprime um padrão simples, como uma pirâmide de asteriscos. 

namespace exercicio07 {

        function imprimirPiramide(altura: number): void {
            for (let i = 1; i <= altura; i++) {
                let linha = '';
                
                for (let j = 1; j <= altura - i; j++) {
                linha += ' ';
                }
                
                for (let j = 1; j <= 2 * i - 1; j++) {
                linha += '*';
                }
                console.log(linha);
            }
        }
                console.log(imprimirPiramide(50));
}