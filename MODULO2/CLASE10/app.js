let nombre= "Juan"
let pais="Argentina"
let edad=43
let tieneTrabajo=true


console.log("Nombre: " + nombre + ", País: " + pais + ", Edad: " + edad)

if (edad >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}

if (tieneTrabajo==true){
    console.log ("Tiene trabajo")
}   else{
        console.log("No tiene trabajo")
    }

    if (edad >= 18 && tieneTrabajo) {
    console.log("Está trabajando y es mayor de edad")
} else if (edad >= 18 && !tieneTrabajo) {
    console.log("Puede trabajar pero no tiene trabajo")
}