//aca se declara una funcion
function saludar(){
    //aca va codigo
    console.log("Hola")
}

//aca se ejecuta
saludar()
saludar()
saludar()

//mas compleja
function saludarNombre(nombre){
    console.log ("Hola " + nombre)

}

saludarNombre("Melisa")
saludarNombre("Juan")

function suma(numero1, numero2){
    numero1+numero2

}
console.log(suma(4,5)) //da undefined, suma no devuelve ningun valor aunque lo sume

//para que devuelva
function suma2(numero1,numero2){
    //usamos la palabra reservda return
    return numero1+numero2
}
console.log(suma2(11,4))