/**
5) Escreva um programa que inverta os caracteres de um string. 

IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse; 
 */

const palavra = "Teste Técnico";
var inverso = "";

for (let index = palavra.length - 1; index >= 0; index--) {
    inverso += palavra[index];
}

console.log(inverso);