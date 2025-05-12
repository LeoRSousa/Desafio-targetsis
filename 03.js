/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
• O menor valor de faturamento ocorrido em um dia do mês; 
• O maior valor de faturamento ocorrido em um dia do mês; 
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

IMPORTANTE: 
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; 
*/

import fs from 'fs';

var dados = null;

try {
    fs.readFile('./dados.json', (err, data) => {
        if (err) throw err;
        dados = JSON.parse(data)
        if (dados != null) {
            var menorValor = dados[0].valor;
            var maiorValor = dados[0].valor;
            var soma = 0;
            var diasZerados =  0;
            var diasMaiorQueMedia = 0;

            for (let i = 0; i < dados.length; i++) {
                const valorAtual = dados[i].valor;

                // Ignorar valor 0
                if (valorAtual === 0) {
                    diasZerados++;
                    continue;  // Pula a iteração se o valor for 0
                }

                // Verificar o menor valor
                if (valorAtual < menorValor) {
                    menorValor = valorAtual;
                }

                // Verificar o maior valor
                if (valorAtual > maiorValor) {
                    maiorValor = valorAtual;
                }

                // Somar os valores para calcular a média
                soma += valorAtual;
            }

            // Calcular a média
            const media = soma / (dados.length - diasZerados);

            for (let i = 0; i < dados.length; i++) {
                const valorAtual = dados[i].valor;

                if (valorAtual > media) {
                    diasMaiorQueMedia++;  // Incrementa o contador se o valor diário for maior que a média
                }
            }

            console.log(`Menor valor de faturamento ocorrido em um dia do mês: $${menorValor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\nMaior valor de faturamento ocorrido em um dia do mês: $${maiorValor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\nNúmero de dias no mês em que o valor de faturamento diário foi superior à média mensal ($${media.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}): ${diasMaiorQueMedia} dias`)
        }
    })
} catch (error) {
    console.log(error)
}

