let peso = 0.0
let altura = 0.0
let alturaAoQuadrado = altura*altura
let imc = peso/alturaAoQuadrado

console.log("IMC:" + imc)
if (imc < 18.5) {
    console.log("Abaixo do peso")
}if (imc >= 18.5 && imc <24.9) {
    console.log("Peso normal")
}if (imc >= 24.9 && imc <30.9) {
    console.log("Acima do peso")
}
// Assinatura final
console.log("-------------------")
console.log("Feito por:")
console.log("BERNARDO")
console.log("Obrigado!")