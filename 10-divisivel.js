//Escreva uma função que receba dois números inteiros e determine se o primeiro é divisível pelo segundo, retornando um booleano.

// Se o primeiro número é divisível pelo segundo: % == 0

const verificarDivisao = (numeroA, numeroB) => {
    if(numeroA % numeroB == 0){
        console.log(`é divisível? ${true}`)
    }else{
        console.log(`é divisível? ${false}`)
    }
}

let primeiroNumero = Number(prompt("digite um número inteiro"))
let segundoNumero = Number(prompt("digite outro número inteiro"))

verificarDivisao(primeiroNumero, segundoNumero)

// `${true}` quando for uma variável como parâmetro

