// Objetos: coleção de dados

let pessoa = {
    nome: "norylaine",
    idade: 36,
    interesses: ["tecnologia", "musica"]
};

console.log(pessoa.nome)
console.log(pessoa.interesses)
console.log(pessoa.interesses[1])

let aluna = {
    nome: "norylaine",
    materias: ["matemática", "português", "física"]
}

console.log(aluna.materias[2])

// Crie uma lista de objetos contendo filmes e suas respectivas classificações. O programa ao receber uma idade armazenada em uma variável, deverá verificar e mostrar no console qual filme o usuário pode assistir.

let filmes = [ 
    {nome: "Deu a louca na chapeuzinho", classificacao: 17},
    {nome: "Vovozona", classificacao: 42},
    {nome: "Killbill", classificacao: 28},
    {nome: "A fuga das galinhas", classificacaoo: 0}
]

let idade = Number(prompt("Qual a sua idade?"));

for(let i = 0; i < filmes.length; i++){
    if(idade >= filmes[i].classificacao){
        console.log(`Você pode assistir ao filme: ${filmes[i].nome}`)
    }
}