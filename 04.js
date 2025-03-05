/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: 
•	SP – R$67.836,43 
•	RJ – R$36.678,66 
•	MG – R$29.229,88 
•	ES – R$27.165,48 
•	Outros – R$19.849,53 

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

var totalFaturamento = faturamento.SP + faturamento.RJ + faturamento.MG + faturamento.ES + faturamento.Outros;

var percentualSP = (faturamento.SP / totalFaturamento) * 100;
var percentualRJ = (faturamento.RJ / totalFaturamento) * 100;
var percentualMG = (faturamento.MG / totalFaturamento) * 100;
var percentualES = (faturamento.ES / totalFaturamento) * 100;
var percentualOutros = (faturamento.Outros / totalFaturamento) * 100;

console.log("Percentual de SP: " + percentualSP.toFixed(2) + "%");
console.log("Percentual de RJ: " + percentualRJ.toFixed(2) + "%");
console.log("Percentual de MG: " + percentualMG.toFixed(2) + "%");
console.log("Percentual de ES: " + percentualES.toFixed(2) + "%");
console.log("Percentual de Outros: " + percentualOutros.toFixed(2) + "%");