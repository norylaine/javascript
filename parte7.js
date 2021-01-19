//Funções

const multiplique = (a,b) => {
    let resultado = a * b; 
    console.log (resultado)
}

multiplique(12, 2)

let primeiroNumero = 7
const multi = () => {
    let segundoNumero = 5;
    let result = primeiroNumero * segundoNumero;
    console.log(result);
}

console.log(multi())

/* o primeiroNumero faz parte do escopo global, mas o segunroNumero está fora do escopo da função abaixo, então não vai rodar:


const soma = () => {
    let result = primeiroNumero + segundoNumero;
}

console.log(soma())

*/

// função que vai gerar um número aleatório a partir de uma função já existente do JS (math.random)

const aleatorioNumero = () => {
  return Math.random()
}
console.log(aleatorioNumero())