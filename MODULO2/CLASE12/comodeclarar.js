//tradicional
function suma (numero1, numero2){
    return numero1 + numero2
}
console.log(suma (2,3))

//funciones anonimas
const multiplicar = function (numero1, numero2){
    return numero1* numero2

}

console.log(multiplicar(3,3))

//arrow function
const restar = (num1, num2) => num1 - num2  //una sola linea sin return
console.log(restar(4,1))

const restar2 =(num1, num2)=>{
    console.log("hola")
    return num1-num2
}

