//Crie um programa que some todos os números pares

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] %2 == 0){
        soma = soma + numeros[i];
    }
}

console.log("a soma de números pares é", soma)

//Crie um programa que some todos os números do vetor

soma = 0;
for(let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i];
}

console.log("a soma de todos os números é", soma)