
//  Mostrar o maior número
var n1 = Number(prompt("Digite o primeiro número:"))
var n2 = Number(prompt("Digite o segundo número:"))
var n3 = Number(prompt("Digite o terceiro número:"))


if(n1 > n2 && n1 > n3) {
    alert(`O ${n1} é o maior numero!`)
}
if(n2 > n1 && n2 > n3) {
    alert(`O ${n2} é o maior numero!`)
}
if(n3 > n2 && n3 > n1) {
    alert(`O ${n3} é o maior numero!`)
}

// Pegar 3 número e colocá-los em ordem crescente 
var n1 = Number(prompt("Digite o primeiro número:"))
var n2 = Number(prompt("Digite o segundo número:"))
var n3 = Number(prompt("Digite o terceiro número:"))

var maior, n4 
 
if (n1 >= n2 && n1 >= n3){ maior = n1} 
else if (n2 >= n1 && n2 >= n3) {maior = n2} 
else  {maior = n3}

if (n1 > n2) {n4 = n2,n2 = n1,n1 = n4} 
if (n1 > n3) {n4 = n3,n3 = n1,n1 = n4} 
if (n2 > n3) {n4 = n3,n3 = n2,n2 = n4}
alert(`A ordem é ${n1} > ${n2} > ${n3}`)

// Dizendo a faixa etária do usuario de acordo com sua idade
var idade = Number(prompt("Digite sua idade:"))

if(idade < 14){
    alert("Você é criança!")
}
else if(idade >= 15 && idade <= 17){
    alert("Você é adolescente!")
}
else if(idade >= 18){
    alert("Você é adulto!")
}


// Verificando se é par ou ímpar e mostrar a raiz ou elevação ao quadrado
var num = Number(prompt("Digite um número:"))

if(num % 2 == 0){
    alert(`O número é par!\n E a raiz quadrada de ${num} é ${Math.sqrt(num)}`)
}
else{
    alert(`O número é ímpar!\n E ${num} elevado ao quadrado é ${num**2}`)
}
































