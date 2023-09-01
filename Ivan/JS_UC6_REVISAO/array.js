let vetor1 = [1,2,3]
let vetor2 = [4,5,6]
let vetor3 = [7,8,9]
var resultado = vetor1.concat(vetor2, vetor3)

//console.log(resultado)

//------------------------

var cores1 = ["Verde", "Amarelo", "Azul", "Branco"]
var cores2 = ["Laranja", "Vermelho", "Preto", "Cinza"]

//.join = insere entre os valores do vetor uma informação
//console.log("conteúdo do vetor 1:", cores1.join(", "))
//console.log("conteúdo do vetor 2:", cores2.join(", "))
//console.log("Segunda posição do vetor1:", cores1[1])
//console.log("Terceira posição do vetor2:", cores2[2])

var resultado2 = cores1.concat(cores2)
console.log("Resultado da concatenação:", resultado2.join(", "))

//------------------------

let frutas = ["maça", "banana", "laranja",]

//console.log("Fruta escolhida: ",frutas[1])

frutas[1] = "uva"
//console.log("Banana passou a ser: ", frutas[1])

//------------------------

let animais = ["cachorro", "gato", "elefante",]

animais.push("leão")
console.log(animais)

//removendo o ultimo valor
animais.pop()
console.log(animais)