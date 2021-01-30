// Javascript tenta converter para ver se dá verdadeiro:

if (7 == "7"){
    console.log("true")
}else {
    console.log("false")
}

// com 3 iguais ele olha o valor e o tipo

if (7 === "7"){
    console.log("true")
}else {
    console.log("false")
}

// if ternário (usando para operações curtas)

(7 === "7") ? console.log("true") : console.log("false")


// typeof: para saber o tipo de uma variável

let primeiroNumero = 4;
let segundoNumero = "4";
let terceiroNumero = "quatro";

console.log(typeof primeiroNumero);
console.log(typeof segundoNumero);
console.log(typeof terceiroNumero);

// === : o valor tem que ser igual e o tipo também

if(primeiroNumero === segundoNumero){
    console.log("iguais")
} else{
    console.log("diferentes")
}