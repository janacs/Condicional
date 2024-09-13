// var, let e const

// var não é muito utilizada, pq ela pode ser reescrevita
// let é a queridinha, podemos reatribuir
// const é uma constante, não pode ser mudada (cpf, data de nascimento
// string são dados textuais 

let nome1 = "Janderson";
console.log(nome1);

// tipos de dados: "textos, oi"
//variável + nomeDaVariavel + = + valor

//false é um dado BOOLEANO (só pode ter dois valores, FALSE ou TRUE, verdadeiro ou falso)
const menorDeIdade = false; 
console.log(menorDeIdade);

//null = nulo (nao tem valor específico)
const tipo = null;
console.log(tipo);


//undefined - indefinido
let saldoBancario;
console.log(saldoBancario)

// operadores aritmeticos
// + - * /  %

// number
let nota1 = 8;
let nota2 = 6;
console.log(nota1 + nota2)

//TempleteString `${}`
let novelaDoMomento = "Pé de Chinesa";
let novelaQueMaisGosto = "Teresa";
console.log(`As novelas que a Carol está assistindo são ${novelaDoMomento} e ${novelaQueMaisGosto}`)

//condicionais - tomada de decisão
// if - se 
// else - senão

//if (a garrafa tiver agua) {
// pode beber
//}else {
//levanta e vai a cozinha beber agua}

let dia = false;
if(dia){
    console.log("Apagua as luzes pois já é dia")
}else
    console.log("é hora de dormir")

//Operadores de comparação
/*
= atribuição
< menor
> maior
>= maior igual
<= menor igual
!= diferente
== igual
=== estritamente igual
*/

let notaDesafio = 6;
notaDesafio = 10;
notaDesafio =2;

//console.log(notaDesafio)

if(notaDesafio >= 6) {
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}