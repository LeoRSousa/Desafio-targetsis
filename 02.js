/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e 
retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 
*/

function sequenciaFibonacci(num) {
    var fibonacci = [0, 1]; // Inicia a sequência com os dois primeiros valores

    // Gera a sequência até o número informado
    while (fibonacci[fibonacci.length - 1] < num) {
        let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(proximoNumero);
    }

    if (fibonacci.includes(num)) return `O número ${num} pertence à sequência de Fibonacci.`;
    else return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

const numeros = [3,4,5,6,7,8,9,21];
numeros.forEach(numero => {
    const fibonacci = sequenciaFibonacci(numero);
    console.log(fibonacci);
});
