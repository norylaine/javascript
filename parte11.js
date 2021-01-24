// Crie um programa que determina se a string contida na variável palavra é um palíndromo. Ex: ovo

const verificarPalindromo = (palavra) => {
    for(let i = 0; i < palavra.length; i++){
        console.log("aqui", palavra[i])
        console.log("aqui2", palavra[palavra.length - i - 1])
        if(palavra[i] != palavra[palavra.length - i - 1]){
            console.log("deu false")
            return false
        }
        console.log("deu true")
    }
    return true
}

console.log(verificarPalindromo("radar"))

// return: finaliza a função, e especifica os valores que devem ser retornados de onde a função foi chamada.

// outra forma de resolver o exemplo acima:

const reversaString = (str) => {
    let palavraArray = str.split("");
    console.log(palavraArray)
    let reversoArray = palavraArray.reverse();
    console.log(reversoArray)
    let reversaString = reversoArray.join("");
    console.log(reversaString);
    return reversaString === str;
};

reversaString("radar");

// split: separa a palavra em vetor
// reverse: só funciona se tiver um vetor (ex. amor - roma)
// join: transforma o vetor em palavras