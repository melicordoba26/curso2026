//Mostrar numeros del 1 al 100
console.log("numeros del 1 al 100")
for (let i = 1; i <= 100; i++) {
    console.log(i)
}

//Mostar solo impares
console.log("numeros impares")
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//Mostar multiplos de 3
console.log("multiplos de 3")
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

//Calcular suma del 1 al 10
console.log("suma de los numeros del 1 al 10")
let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma = suma + i
}

console.log("La suma es: " + suma)