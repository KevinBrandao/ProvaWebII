// 5 - Exercício de Funções Simples - Calculadora de Área: 
// Implemente uma função que calcula a área de um retângulo com base na largura e altura fornecidas como argumentos. 

namespace exercicio05 {
    function calculateArea(largura: number, altura: number) {
        return (largura * (altura > 0 ? altura : largura));
    }
    let areaRectangle: number = calculateArea(3, 4);
    console.log(`Área do retângulo: ${areaRectangle}`);
}